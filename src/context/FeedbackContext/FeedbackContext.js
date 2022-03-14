

import React, { createContext, useState, useEffect,  } from 'react'
import InitialState from './InitialState'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackState, setFeedbackState] = useState(InitialState);
  const inputRef = React.createRef()
  useEffect(() => {
    fetchFeedbacks()
  }, [])
  const fetchFunction = async (url, method, headers, body) => {
    const response = await fetch(url, {
    method: method,
    headers: headers ? headers : '',
    body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
  }
  const focusInput = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }
  const fetchFeedbacks = async () => { 
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedbackState((prevState) => {
        return {
            ...prevState, 
            feedbacks: data
        }
    })
  }
  const addFeedback = async (newFeedback) => {
    const recentFeedback = await fetchFunction(
      '/feedback',
      'POST',
      { 'Content-Type': 'application/json' },
      newFeedback
    )
    setFeedbackState(prevState => {
        return {
            ...prevState,
            feedbacks: [recentFeedback, ...prevState.feedbacks]
        }
    })
  } 
  const deleteFeedback = async (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
         await fetch(`/feedback/${id}`, {
           method: 'DELETE',
         })
          setFeedbackState((prevState) => {
            return {
              ...prevState,
              feedbacks: prevState.feedbacks.filter((feedback) => {
                return feedback.id !== id && feedback
              }),
            }
          })
     }
  }
  const editFeedback = (id) => {
      setFeedbackState(prevState => {
          return {
              ...prevState, 
              feedbackEdit:  { 
                item: prevState.feedbacks.filter(feedback => feedback.id === id && feedback)[0] ,
                edit: true 
            }
          }
      })
  }
  const updateFeedback = async (updFeedback) => {
      const recentFeedback = await fetchFunction(
        `/feedback/${updFeedback.id}`,
        'PUT',
        { 'Content-Type': 'application/json' },
        updFeedback
      )
      setFeedbackState(prevState => {
          return {
            ...prevState,
            feedbacks: prevState.feedbacks.map((feedback) => {
              return feedback.id === recentFeedback.id && recentFeedback
            }),
            feedbackEdit: {
              item: [],
              edit: false,
            },
          };
      })
  }
    return (
      <FeedbackContext.Provider
        value={{
          feedbackState,
          addFeedback,
          deleteFeedback,
          editFeedback,
          updateFeedback,
          inputRef, 
          focusInput
        }}
      >
        {children}
      </FeedbackContext.Provider>
    );
}

export default FeedbackContext