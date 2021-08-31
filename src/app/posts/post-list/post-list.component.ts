import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { Post } from 'src/app/models/Post';
import { State } from 'src/app/reducers';
import { deletePost } from 'src/app/reducers/posts/post.action';
import { getPosts } from 'src/app/reducers/posts/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]> = this.store$.select(getPosts);

  constructor(private store$: Store<State>) {

  }

  ngOnInit(): void {

  }

  onDeletePost = (id: string) => {
    const isUserWantToDeletePost = confirm('Are you sure')
    if (isUserWantToDeletePost) {
      this.store$.dispatch(deletePost({id}))
    }
  }
}
