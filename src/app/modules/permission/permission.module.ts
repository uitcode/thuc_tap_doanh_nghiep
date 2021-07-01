import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './pages/permission/permission.component';
import { SharedModule } from '@app/shared/shared.module';
import { PermissionRoutingModule } from './permission.routing';

@NgModule({
  declarations: [PermissionComponent],
  imports: [CommonModule, PermissionRoutingModule, SharedModule]
})
export class PermissionModule {}
