import {initialState} from "./auth.state";
import {Action, createReducer, on} from "@ngrx/store";
import {loginSuccess} from "./auth.action";


const _authReducer = createReducer(initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user
    }
  })
)

export const authReducer = (state = initialState, action: Action) => {
  return _authReducer(state, action)
}
