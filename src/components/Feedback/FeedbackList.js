
import { useContext, useEffect } from 'react'
import FeedbackContext from '../../context/FeedbackContext/FeedbackContext';
import { FaEdit, FaTimes } from 'react-icons/fa'
import {
  FeedbackListElement,
  FeedbackCard,
  RatingHolder,
  ButtonsHolder,
} from "./Feedback.styles";

const FeedbackList = () => {

  const { feedbackState, deleteFeedback, editFeedback, focusInput } =
    useContext(FeedbackContext);
    useEffect(() => {
      console.log(feedbackState.feedbacks);
    }, [feedbackState.feedbacks]);
   return (
     <FeedbackListElement>
       {feedbackState.feedbacks.map((feedback) => {
         return (
           <FeedbackCard key={feedback.id}>
             <RatingHolder>{feedback.rating}</RatingHolder>
             <p>{feedback.feedbackText}</p>
             <ButtonsHolder>
               <button onClick={() => {
                   editFeedback(feedback.id);
                   focusInput()
               }}>
                 <FaEdit color="purple" />
               </button>
               <button
                 onClick={() => {
                   deleteFeedback(feedback.id);
                 }}
               >
                 <FaTimes color="purple" />
               </button>
             </ButtonsHolder>
           </FeedbackCard>
         );
       })}
     </FeedbackListElement>
   );
}

export default FeedbackList