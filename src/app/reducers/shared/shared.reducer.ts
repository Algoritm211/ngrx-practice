import { initialState, SharedState } from './shared.state';
import { Action, createReducer, on } from '@ngrx/store';
import { setIsLoading } from './shared.action';


const _sharedReducer = createReducer(initialState,
  on(setIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.status
    };
  })
);

export const sharedReducer = (state: SharedState | undefined, action: Action) => {
  return _sharedReducer(state, action);
};
