import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { SearchProjectComponent } from './pages/search-project/search-project.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: SearchProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProjectRoutingModule {}
