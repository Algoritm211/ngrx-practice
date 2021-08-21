import {Action, createReducer, on} from "@ngrx/store";
import {initialState, PostsState} from "./posts.state";
import {addPost} from "./post.action";

const _postReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    const post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    }
  }),
  )

export const postReducer = (state: PostsState | undefined, action: Action) => {
  return _postReducer(state, action)
}

