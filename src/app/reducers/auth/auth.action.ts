import {createAction, props} from "@ngrx/store";
import { User } from "src/app/models/User";


export const LOGIN_START_ACTION = '[login page] start'
export const LOGIN_SUCCESS_ACTION = '[login page] success'
export const LOGIN_FAILED_ACTION = '[login page] success'

export const loginStart = createAction(
  LOGIN_START_ACTION,
  props<{email: string, password: string}>()
)

export const loginSuccess = createAction(
  LOGIN_SUCCESS_ACTION,
  props<{user: User}>()
)
