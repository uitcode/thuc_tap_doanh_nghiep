import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SharedModule } from '@app/shared/shared.module';
import { ResetPasswordRoutingModule } from './reset-password.routing';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [CommonModule, ResetPasswordRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: Window, useValue: window }]
})
export class ResetPasswordModule {}
