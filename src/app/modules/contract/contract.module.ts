import { ContractRoutingModule } from './contract.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './pages/contract/contract.component';
import { SharedModule } from '@app/shared/shared.module';
import { ContractEditComponent } from './modals/contract-edit/contract-edit.component';
import { ContractDetailComponent } from './modals/contract-detail/contract-detail.component';

@NgModule({
  declarations: [ContractComponent, ContractEditComponent, ContractDetailComponent],
  imports: [CommonModule, ContractRoutingModule, SharedModule]
})
export class ContractModule {}
