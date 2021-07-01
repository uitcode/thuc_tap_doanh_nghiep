import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { MaterialComponent } from './pages/material/material.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: MaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {}
