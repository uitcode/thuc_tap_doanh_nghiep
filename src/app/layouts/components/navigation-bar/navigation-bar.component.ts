import { Component, OnInit } from '@angular/core';
import { NAVIGATIONS, SidebarItem } from '@app/core/constants/navigations';
import { AuthService } from '@app/core/services/auth.service';
import { MainLayoutService } from '@app/layouts/main-layout/main-layout.service';
import { RoleEnum } from '@core/enum/role.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  role: string = 'guest';
  roles = RoleEnum;
  navigations: SidebarItem[] = NAVIGATIONS;
  navigationsRole: SidebarItem[] = [];
  constructor(public mainLayoutService: MainLayoutService, private authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.getCurrentRole();
    this.navigationsRole = this.navigations.filter(info => {
      return info.role.only.indexOf(this.role) !== -1 && info.mobile_bar;
    });
  }

  toggleSidebar() {
    this.mainLayoutService.toggle = !this.mainLayoutService.toggle;
  }

  hiddenSidebar() {
    this.mainLayoutService.toggle = false;
  }
}
