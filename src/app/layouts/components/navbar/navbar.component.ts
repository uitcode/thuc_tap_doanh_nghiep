import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { MainLayoutService } from '@app/layouts/main-layout/main-layout.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  avatarDefault: string = '../assets/images/avatar/avatar.png';
  avatar: string = '';
  logo = '../../assets/images/logo/logo-color.png';
  displayName: string = 'No Name';
  role: string = 'Khách';
  listNoti = [
    {
      time: '5 phút',
      seen: false
    },
    {
      time: '34 phút',
      seen: false
    },
    {
      time: '1 giờ',
      seen: true
    },
    {
      time: '8 giờ',
      seen: true
    },
    {
      time: '1 ngày',
      seen: false
    },
    {
      time: '2 ngày',
      seen: true
    },
    {
      time: '3 tuần',
      seen: false
    }
  ];
  visibleNotification = false;
  visibleProfile = false;

  visibleNotificationTemp = false;
  visibleProfileTemp = false;
  constructor(
    public mainLayoutService: MainLayoutService,
    private loadingBarService: LoadingBarService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(resp => {
      if (resp) {
        this.displayName = resp?.data?.display_name ? resp?.data?.display_name : 'No Name';
        this.avatar = resp?.data?.avatar ? resp?.data?.avatar : this.avatarDefault;
        switch (resp.data.role) {
          case 'supplier':
            this.role = 'Nhà cung cấp';
            break;
          case 'admin':
            this.role = 'Admin';
            break;
          case 'constructor':
            this.role = 'Nhà thầu';
            break;
          default:
            this.role = 'Khách';
            break;
        }
      }
    });
  }

  toggleSidebar() {
    this.mainLayoutService.toggle = !this.mainLayoutService.toggle;
  }

  logout() {
    this.authService
      .logout()
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          return EMPTY;
        })
      )
      .subscribe(_ => {
        this.router.navigateByUrl('/login');
      });
  }

  showNotificationList() {
    if (this.visibleNotification) {
      setTimeout(() => {
        this.visibleNotification = false;
      }, 0);
    }
  }

  showProfile() {
    if (this.visibleProfile) {
      setTimeout(() => {
        this.visibleProfile = false;
      }, 0);
    }
  }
}
