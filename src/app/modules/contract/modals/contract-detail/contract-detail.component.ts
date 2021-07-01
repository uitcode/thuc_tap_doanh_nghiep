import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {
  @Input() contract: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
