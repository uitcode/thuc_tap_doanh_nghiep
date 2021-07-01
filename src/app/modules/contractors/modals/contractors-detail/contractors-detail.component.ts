import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractors-detail',
  templateUrl: './contractors-detail.component.html',
  styleUrls: ['./contractors-detail.component.scss']
})
export class ContractorsDetailComponent implements OnInit {
  @Input() contractors: any = {};

  constructor() {}

  ngOnInit(): void {}
}
