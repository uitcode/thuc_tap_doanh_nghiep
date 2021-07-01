import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { ContractorsComponent } from './pages/contractors/contractors.component';
const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: ContractorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule {}
