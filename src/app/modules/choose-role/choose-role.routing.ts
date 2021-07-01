import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { ChooseRoleComponent } from './pages/choose-role/choose-role.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.AUTH,
    component: ChooseRoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseRoleRoutingModule {}
