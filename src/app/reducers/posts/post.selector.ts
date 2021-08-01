import {createFeatureSelector, createSelector} from "@ngrx/store";
import {postsNode, PostsState} from "./posts.state";


const getPostsState = createFeatureSelector<PostsState>(postsNode)

export const getPosts = createSelector(
  getPostsState,
  (state) => {
    return state.posts
  }
)
