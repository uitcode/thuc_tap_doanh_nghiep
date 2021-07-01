import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { ProjectComponent } from '@modules/project/pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
