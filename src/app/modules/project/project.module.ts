import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectRoutingModule } from './project.routing';
import { SharedModule } from '@app/shared/shared.module';
import { ProjectDetailComponent } from './modals/project-detail/project-detail.component';
import { EditProjectComponent } from './modals/edit-project/edit-project.component';

@NgModule({
  declarations: [ProjectComponent, ProjectDetailComponent, EditProjectComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule]
})
export class ProjectModule {}
