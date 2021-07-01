import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {
  constructor(private router: Router) {
    const path = this.router.url.split('/');
    this._navigation.next('/' + path[1]);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const path = e.url.split('/');
        this._navigation.next('/' + path[1]);
      });
  }
  private _toggle = new BehaviorSubject<boolean>(false);
  toggle$ = this._toggle.asObservable();

  get toggle(): boolean {
    return this._toggle.getValue();
  }

  set toggle(value: boolean) {
    this._toggle.next(value);
  }

  close(innerWidth: number = 0) {
    if (innerWidth < 992) {
      this._toggle.next(false);
    }
  }

  private _navigation = new BehaviorSubject<string>('');
  navigation$ = this._navigation.asObservable();

  get navigation(): string {
    return this._navigation.getValue();
  }

  set navigation(value: string) {
    this._navigation.next(value);
  }
}
