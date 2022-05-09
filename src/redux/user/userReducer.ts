import { ADD_USER } from "./userTypes"

const initialState: UserState = {
    email: '', isLogged: false
}

const userReducer = (state: UserState = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case ADD_USER:
            return { email: action.payload, isLogged: true }
        default: return state
    }
}

export default userReducer
