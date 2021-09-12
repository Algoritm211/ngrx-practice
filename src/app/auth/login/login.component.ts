import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {loginStart} from "../../reducers/auth/auth.action";
import {setIsLoading} from "../../reducers/shared/shared.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  onSubmit = () => {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    if (this.loginForm.valid) {
      this.store.dispatch(setIsLoading({status: true}))
      this.store.dispatch(loginStart({email, password}))
    }
  }

  showEmailInputError = () => {
    const emailInput = this.loginForm.get('email')
    if (emailInput?.touched && !emailInput.valid) {
      if (emailInput.errors?.required) {
        return 'Email is required for authentication';
      }
      if (emailInput.errors?.email) {
        return 'Please, type valid email'
      }
    }
    return ''
  }

  showPasswordInputError = () => {
    const passwordInput = this.loginForm.get('password')
    if (passwordInput?.touched && !passwordInput.valid) {
      if (passwordInput.errors?.minLength) {
        return 'Provide password minimum length of 6 symbols';
      }
      if (passwordInput.errors?.required) {
        return 'Password is required for authentication';
      }
    }
    return ''
  }
}
