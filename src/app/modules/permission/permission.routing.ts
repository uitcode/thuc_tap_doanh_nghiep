import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { PermissionComponent } from './pages/permission/permission.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: PermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule {}
