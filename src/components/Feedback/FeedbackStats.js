

import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext/FeedbackContext'
import { StatsHolder } from './Feedback.styles'

function FeedbackStats() {
  const { feedbackState } = useContext(FeedbackContext)
  // NOTE: simpler average calculation
  // Calculate ratings avg
  const average = Math.round(
    feedbackState.feedbacks.reduce((acc, { rating }) => acc + rating, 0) /
      feedbackState.feedbacks.length
  )
  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)

  return (
    <StatsHolder className='feedback-stats'>
      <h3>{feedbackState.feedbacks.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </StatsHolder>
  )
}

export default FeedbackStats
