import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-guest-navbar',
  templateUrl: './guest-navbar.component.html',
  styleUrls: ['./guest-navbar.component.scss']
})
export class GuestNavbarComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  avatarDefault: string = '../assets/images/avatar/avatar.png';
  avatar: string = '';
  displayName: string = 'No Name';
  role: string = 'Khách';
  isLogin: boolean = false;
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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isAuthenticated.pipe(untilDestroyed(this)).subscribe(resp => {
      this.isLogin = resp;
      this.authService.currentUser$.pipe(untilDestroyed(this)).subscribe(resp => {
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
    });
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
