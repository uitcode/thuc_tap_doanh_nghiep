import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
