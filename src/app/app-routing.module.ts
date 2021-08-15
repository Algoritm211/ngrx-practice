import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPostComponent} from "./add-post/add-post.component";
import {PostListComponent} from "./post-list/post-list.component";

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
