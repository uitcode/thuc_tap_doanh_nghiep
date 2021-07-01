import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {
  @Input() material: any = {};

  constructor() {}

  ngOnInit(): void {}
}
