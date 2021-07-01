import { Component, HostListener, OnInit } from '@angular/core';
import { MainLayoutService } from './main-layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow();
  }

  innerWidth: number = 0;
  innerHeight: number = 0;
  constructor(public mainLayoutService: MainLayoutService) {}

  ngOnInit(): void {
    this.resizeWindow();
  }

  resizeWindow() {
    this.innerWidth = window.innerWidth;
    if (window.innerWidth < 768) {
      this.innerHeight = window.innerHeight;
    } else {
      this.innerHeight = window.innerHeight + 48;
    }
    if (this.innerWidth < 992) {
      this.mainLayoutService.toggle = false;
    } else {
      this.mainLayoutService.toggle = true;
    }
  }
}
