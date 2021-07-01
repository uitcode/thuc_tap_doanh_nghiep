import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { SupplierComponent } from './pages/supplier/supplier.component';
const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: SupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {}
