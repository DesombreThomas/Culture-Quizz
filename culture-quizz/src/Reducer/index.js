import { CHANGE_AMOUNT_OF_QUESTIONS, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "../Actions";

const initialState = {
    questions_category: "",
    questions_difficulty: "",
    questions_type: "",
    amount_of_questions: 50,
    score: 0,
}


function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                questions_category: action.cat,
            }
        case CHANGE_DIFFICULTY:
            return {
                ...state,
                questions_difficulty: action.level,
            }
                case CHANGE_TYPE:
                    return {
                        ...state,
                        questions_type: action.style,
                    }
                    case CHANGE_AMOUNT_OF_QUESTIONS:
            return {
                ...state,
                amount_of_questions: action.amount,
            }
            case CHANGE_SCORE:
                return {
                    ...state,
                    score: action.score,
                }
            default:
                return state;
            }
            
          };
      
      export default reducer;