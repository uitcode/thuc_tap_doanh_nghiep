import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { EditSupplierComponent } from './modals/edit-supplier/edit-supplier.component';
import { SharedModule } from '@app/shared/shared.module';
import { SupplierRoutingModule } from './supplier.routing';
import { SupplierDetailComponent } from './modals/supplier-detail/supplier-detail.component';

@NgModule({
  declarations: [SupplierComponent, EditSupplierComponent, SupplierDetailComponent],
  imports: [CommonModule, SupplierRoutingModule, SharedModule],
  providers: [{ provide: Window, useValue: window }]
})
export class SupplierModule {}
