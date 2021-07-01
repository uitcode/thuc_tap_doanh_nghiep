import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  banner = '../../assets/images/banner.jpg';
  year: number = 2021;

  constructor() {}

  ngOnInit(): void {
    this.year = dayjs().year();
  }
}
