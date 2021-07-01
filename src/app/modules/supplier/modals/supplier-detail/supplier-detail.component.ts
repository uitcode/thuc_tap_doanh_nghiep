import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {
  @Input() supplier: any = {};

  constructor() {}

  ngOnInit(): void {}
}
