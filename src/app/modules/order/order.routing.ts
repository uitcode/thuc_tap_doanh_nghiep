import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { OrderComponent } from '@modules/order/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
