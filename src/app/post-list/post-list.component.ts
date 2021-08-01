import { Component, OnInit } from '@angular/core';
import {State} from "../reducers";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {getPosts} from "../reducers/posts/post.selector";

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

}
