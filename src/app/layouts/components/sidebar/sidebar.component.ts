import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATIONS, NAVIGATIONS_BOTTOM, SidebarItem } from '@app/core/constants/navigations';
import { AuthService } from '@app/core/services/auth.service';
import { MainLayoutService } from '@app/layouts/main-layout/main-layout.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  logo = '../../assets/images/logo/logo-w.png';
  avatarDefault: string = '../assets/images/avatar/avatar.png';
  avatar: string = '';
  navigations: SidebarItem[] = NAVIGATIONS;
  navigations_bottom: SidebarItem[] = NAVIGATIONS_BOTTOM;
  innerWidth: number = 0;
  displayName: string = 'No Name';
  role: string = 'guest';
  roleName: string = 'Khách';
  navigationsRole: SidebarItem[] = [];

  constructor(
    public mainLayoutService: MainLayoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.authService.currentUser$.subscribe(resp => {
      if (resp) {
        this.displayName = resp?.data?.display_name ? resp?.data?.display_name : 'No Name';
        this.avatar = resp?.data?.avatar ? resp?.data?.avatar : this.avatarDefault;
        switch (resp.data.role) {
          case 'supplier':
            this.roleName = 'Nhà cung cấp';
            break;
          case 'admin':
            this.roleName = 'Admin';
            break;
          case 'constructor':
            this.roleName = 'Nhà thầu';
            break;
          default:
            this.roleName = 'Khách';
            break;
        }
      }
    });
    this.role = this.authService.getCurrentRole();
    this.navigationsRole = this.navigations.filter(info => {
      return info.role.only.indexOf(this.role) !== -1;
    });
  }

  // goToPage(path: string) {
  //   this.mainLayoutService.close(this.innerWidth);
  //   this.router.navigateByUrl(path);
  // }
}
