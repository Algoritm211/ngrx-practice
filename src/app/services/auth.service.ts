import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthData} from "../models/AuthData";
import {Observable} from "rxjs";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {}

  login = (email: string, password: string): Observable<AuthData> => {
    return this.http.post<AuthData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      {email, password, returnSecureToken: true}
    )
  }

  formatAuthUser = (data: AuthData) => {
    const expirationDate = new Date(new Date().getTime() + Number(data.expiresIn) * 1000)
    return new User(data.email, data.idToken, data.localId, expirationDate)
  }
}
