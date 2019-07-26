import { RECEIVE_QUESTIONS, VOTE_QUESTION, SAVE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case VOTE_QUESTION :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.vote]: {
            ...state[action.id][action.vote],
            votes: state[action.id][action.vote].votes.concat([action.authedUser])
          }
        }
      }
    case SAVE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
        }
    default :
      return state
  }
}