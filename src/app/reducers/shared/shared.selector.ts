import {createFeatureSelector, createSelector} from "@ngrx/store";
import {sharedNode, SharedState} from "./shared.state";


const sharedState = createFeatureSelector<SharedState>(sharedNode)

export const getIsLoading = createSelector(
  sharedState,
  (state) => {
    return state.isLoading
  }
)
