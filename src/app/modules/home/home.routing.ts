import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { HomeComponent } from '@modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
