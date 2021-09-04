import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./login/login.component";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "../reducers/auth/auth.effects";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule {}
