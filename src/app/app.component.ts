import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs";
import {State} from "./reducers";
import {getIsLoading} from "./reducers/shared/shared.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-effects';
  showLoading: Observable<boolean>

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.showLoading = this.store.select(getIsLoading)
  }

}
