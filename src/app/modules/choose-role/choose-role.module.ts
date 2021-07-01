import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseRoleComponent } from './pages/choose-role/choose-role.component';
import { SharedModule } from '@app/shared/shared.module';
import { ChooseRoleRoutingModule } from './choose-role.routing';

@NgModule({
  declarations: [ChooseRoleComponent],
  imports: [CommonModule, ChooseRoleRoutingModule, SharedModule],
  providers: [{ provide: Window, useValue: window }]
})
export class ChooseRoleModule {}
