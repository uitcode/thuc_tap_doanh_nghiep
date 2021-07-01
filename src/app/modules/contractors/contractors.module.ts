import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { SharedModule } from '@app/shared/shared.module';
import { ContractorsRoutingModule } from './contractors.routing';
import { EditContractorsComponent } from './modals/edit-contractors/edit-contractors.component';
import { ContractorsDetailComponent } from './modals/contractors-detail/contractors-detail.component';

@NgModule({
  declarations: [ContractorsComponent, EditContractorsComponent, ContractorsDetailComponent],
  imports: [CommonModule, ContractorsRoutingModule, SharedModule],
  providers: [{ provide: Window, useValue: window }]
})
export class ContractorsModule {}
