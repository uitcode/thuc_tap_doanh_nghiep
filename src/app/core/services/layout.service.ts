import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LayoutEnum } from '@core/enum/layout.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // tslint:disable-next-line:variable-name
  private _layout = new BehaviorSubject<LayoutEnum>(LayoutEnum.AUTH);
  layout$ = this._layout.asObservable();

  get layout(): LayoutEnum {
    return this._layout.getValue();
  }

  set layout(value: LayoutEnum) {
    this._layout.next(value);
  }
  // tslint:disable-next-line:variable-name
  private _loading = new BehaviorSubject<boolean>(true);
  loading$ = this._loading.asObservable();

  constructor() {}

  setLoading(loading: boolean): void {
    this._loading.next(loading);
  }

  setLayout(value: LayoutEnum): void {
    this._layout.next(value);
  }
}
