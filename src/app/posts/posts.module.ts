import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
  ]
})
export class PostsModule {}
