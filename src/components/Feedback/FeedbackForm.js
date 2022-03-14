import { useState, useContext, useEffect } from "react";
import { v4 }  from "uuid";

import {
  RatingList,
  RatingItem,
  RatingLabel,
  FeedbackCard,
  FeedbackFormWrapper,
  FeedbackInput,
  Small,
} from "./Feedback.styles";
import { BasicBtn } from "../shared/SharedComponents";

import FeedbackContext from "../../context/FeedbackContext/FeedbackContext";


const FeedbackForm = () => {
  const { feedbackState, addFeedback, updateFeedback, inputRef } =
    useContext(FeedbackContext);
  const [formError, setFormError] = useState({
    btnDisabled: true,
    message: "",
  });
  const [newFeedback, setNewFeedback] = useState({
    rating: 10,
    feedbackText: "",
  });
  useEffect(() => {
     if(feedbackState.feedbackEdit.edit === true){
     setNewFeedback(feedbackState.feedbackEdit.item)
     setFormError({btnDisabled: false, message: null})
    }
  }, [feedbackState])

  const handleNumChange = (e) => {
    const feedback = { ...newFeedback };
    feedback[e.target.name] = +e.target.value;
    setNewFeedback(() => {
      return { ...feedback };
    });
  };
  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setFormError({
        btnDisabled: true,
        message: null,
      });
    } else if (value.trim().length < 10) {
      setFormError({
        btnDisabled: true,
        message: "Text must be at least 10 characters",
      });
    } else {
      setFormError({
        btnDisabled: false,
        message: null,
      });
    }
    const feedback = { ...newFeedback };
    feedback[e.target.name] = value;
    setNewFeedback(() => {
      return { ...feedback };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      if (newFeedback.feedbackText.trim().length >= 10) {
        if (feedbackState.feedbackEdit.edit === true) {
          updateFeedback(newFeedback)
        } else {
          const feedback = { id: v4(), ...newFeedback };
          addFeedback(feedback);
         }
          setNewFeedback({
            rating: 10,
            feedbackText: "",
          });
          setFormError({
            btnDisabled: true,
            message: null,
          });
      }
  };
  return (
    <FeedbackFormWrapper onSubmit={handleSubmit}>
      <FeedbackCard>
        <div>
          <h2>How would you rate your service with us?</h2>
          <RatingList>
            {Array.from({ length: 10 }, (_, i) => {
              return (
                <RatingItem key={i + 1}>
                  <input
                    id={i + 1}
                    type="radio"
                    name="rating"
                    value={i + 1}
                    checked={newFeedback.rating === i + 1}
                    onChange={handleNumChange}
                  />
                  <RatingLabel htmlFor={i + 1}>{i + 1}</RatingLabel>
                </RatingItem>
              );
            })}
          </RatingList>
          <legend>
            <FeedbackInput
              name="feedbackText"
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={newFeedback.feedbackText}
              ref={inputRef}
            />
            <BasicBtn
              type="submit"
              isDisabled={formError.btnDisabled}
              text="Send"
            />
          </legend>
          <Small>{formError.message}</Small>
        </div>
      </FeedbackCard>
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
