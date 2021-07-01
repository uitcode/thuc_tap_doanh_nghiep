import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { SearchSuppliersComponent } from './pages/search-suppliers/search-suppliers.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: SearchSuppliersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSuppliersRoutingModule {}
