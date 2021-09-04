import {initialState} from "./auth.state";
import {Action, createReducer} from "@ngrx/store";


const _authReducer = createReducer(initialState)

export const authReducer = (state = initialState, action: Action) => {
  return _authReducer(state, action)
}
