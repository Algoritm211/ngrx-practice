import { Action, createReducer, on } from '@ngrx/store';
import { initialState, PostsState } from './posts.state';
import { addPost, deletePost, updatePost } from './post.action';


const _postReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    const post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPostsList = state.posts.map((post) => {
      if (post.id === action.post.id) {
        return action.post;
      }
      return post;
    });
    return {
      ...state,
      posts: updatedPostsList,
    };
  }),
  on(deletePost, (state, action) => {
    const newPostList = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPostList
    };
  })
);

export const postReducer = (state: PostsState | undefined, action: Action) => {
  return _postReducer(state, action);
};

