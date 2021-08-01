import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import { environment } from "src/environments/environment";
import {postsNode, PostsState} from "./posts/posts.state";
import {postReducer} from "./posts/post.reducer";


export interface State {
  [postsNode]: PostsState,
}

export const AppReducer = {
  [postsNode]: postReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
