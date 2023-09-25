export const types = {
setUserState: ' [USER] set User State',
setError: '[USER] set Error'
}


const userReducer = (state, action = {}) => {
    switch(action.type) {
        case types.setUserState:
            return {
                ...state,
                user: action.payload,
            }
            case types.setError:
                return{
                    ...state,
                    error: action.payload,
                }
        default:
            return state
    }
}

export default userReducer;