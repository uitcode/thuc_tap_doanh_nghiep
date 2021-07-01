import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileRoutingModule } from './profile.routing';
import { CoreModule } from '@app/core/core.module';
import { ChangePasswordComponent } from './modals/change-password/change-password.component';

@NgModule({
  declarations: [ProfileComponent, ChangePasswordComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: Window, useValue: window }]
})
export class ProfileModule {}
