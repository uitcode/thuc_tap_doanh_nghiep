import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './pages/material/material.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialRoutingModule } from './material.routing';
import { MaterialDetailComponent } from './modals/material-detail/material-detail.component';
import { MaterialEditComponent } from './modals/material-edit/material-edit.component';

@NgModule({
  declarations: [MaterialComponent, MaterialDetailComponent, MaterialEditComponent],
  imports: [CommonModule, MaterialRoutingModule, SharedModule]
})
export class MaterialModule {}
