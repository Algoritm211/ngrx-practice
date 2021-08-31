import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import { Post } from 'src/app/models/Post';
import { State } from 'src/app/reducers';
import { getPostById } from 'src/app/reducers/posts/post.selector';
import { updatePost } from 'src/app/reducers/posts/post.action';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit, OnDestroy {
  post: Post
  postForm: FormGroup
  postSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const postId = params.get('id')

      this.postSubscription = this.store
        .select(getPostById, {id: postId})
        .subscribe((data: Post) => {
          this.post = data
          this.initializeForm()
        })
    })
  }

  initializeForm = () => {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ])
    })
  }

  onUpdatePost() {
    if (!this.postForm.valid) {
      return
    }

    const post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    this.store.dispatch(updatePost({post}))
    this.router.navigate(['/'])
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.required) {
        return 'Description of post is required';
      }

      if (descriptionForm.errors?.minlength) {
        return 'Minimum length - 10 symbols';
      }
    }
    return ''
  }

  showTitleErrors() {
    const titleForm = this.postForm.get('title')
    if (titleForm?.touched && !titleForm.valid) {
      if (titleForm.errors?.minlength) {
        return 'Minimum length - 6 symbols';
      }
      if (titleForm.errors?.required) {
        return 'Title of post is required';
      }
    }
    return ''
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe()
  }

}
