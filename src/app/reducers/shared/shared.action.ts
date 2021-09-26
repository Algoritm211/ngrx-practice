import { createAction, props } from '@ngrx/store';

export const CHANGE_LOADING_STATE = '[shared state] change loading state';

export const setIsLoading = createAction(
  CHANGE_LOADING_STATE,
  props<{status: boolean}>()
);
