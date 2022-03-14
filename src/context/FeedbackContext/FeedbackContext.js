

import React, { createContext, useState, useEffect,  } from 'react'
import InitialState from './InitialState'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackState, setFeedbackState] = useState(InitialState);
  const inputRef = React.createRef()
  useEffect(() => {
    fetchFeedbacks()
  }, [])
  const fetchFunction = (body, method) => {
    let lsFeedbacks =  JSON.parse(localStorage.getItem('feedbacks')) || []
    let feedbacks
    switch (method) {
      case 'POST':
        feedbacks = [body, ...lsFeedbacks]
        setFeedbackState((prevState) => {
          return {
            ...prevState,
            feedbacks: feedbacks,
          }
        })
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks) )
        break
      case 'PUT':
       feedbacks = lsFeedbacks.map(feedback => {
          return feedback.id === body.id ? body : feedback
        })       
        setFeedbackState((prevState) => {
          return {
            ...prevState,
            feedbacks: feedbacks,
          }
        })
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
        break
      case 'DELETE':
       feedbacks = lsFeedbacks.filter(feedback => {
         return feedback.id !== body.id && feedback
       })
       setFeedbackState(prevState => {
         return {
           ...prevState,
           feedbacks: feedbacks
         }
       })
       localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
        break
      default:
        break
    } 
  }
  const focusInput = () => {
     inputRef.current.focus()
  }
  const fetchFeedbacks = () => { 
    let lsFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || []
    setFeedbackState((prevState) => {
        return {
            ...prevState, 
            feedbacks: lsFeedbacks
        }
    })
  }
  const addFeedback =  (newFeedback) => {
    fetchFunction(newFeedback, 'POST')
  } 
  const updateFeedback = async (updFeedback) => {
    fetchFunction(updFeedback, 'PUT')
    setFeedbackState(prevState => {
      return {
        ...prevState,
        feedbackEdit: {
          item: {},
          edit: false
        }
      }
    })
  }
  const deleteFeedback = (feedback) => {
    if (window.confirm('Are you sure you want to delete?')) {
      fetchFunction(feedback, 'DELETE')
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