import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/Post';

export const ADD_POST_ACTION = '[posts] add post';
export const UPDATE_POST_ACTION = '[posts] update post';
export const DELETE_POST_ACTION = '[posts] delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
