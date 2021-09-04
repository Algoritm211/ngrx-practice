import {MetaReducer} from "@ngrx/store";
import { environment } from "src/environments/environment";
import {postsNode, PostsState} from "./posts/posts.state";
import {authNode, AuthState} from "./auth/auth.state";
import {postReducer} from "./posts/post.reducer";
import {authReducer} from "./auth/auth.reducer";


export interface State {
  [postsNode]: PostsState,
  [authNode]: AuthState
}

export const AppReducer = {
  [postsNode]: postReducer,
  [authNode]: authReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
