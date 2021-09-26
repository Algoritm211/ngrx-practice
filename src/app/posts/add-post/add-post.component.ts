import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { addPost } from 'src/app/reducers/posts/post.action';
import { Post } from 'src/app/models/Post';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
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
    return '';
  }

  showTitleErrors() {
    const titleForm = this.postForm.get('title');
    if (titleForm?.touched && !titleForm.valid) {
      if (titleForm.errors?.minlength) {
        return 'Minimum length - 5 symbols';
      }
      if (titleForm.errors?.required) {
        return 'Title of post is required';
      }
    }
    return '';
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      id: Date.now().toString(),
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
  }
}
