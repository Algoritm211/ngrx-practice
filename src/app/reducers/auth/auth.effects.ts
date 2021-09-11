import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginStart, loginSuccess} from "./auth.action";
import {exhaustMap, map} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
    ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(map((data) => {
            const user = this.authService.formatAuthUser(data)
            return loginSuccess({user})
          }))
      })
    )
  })
}
