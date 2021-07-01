import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SharedModule } from '@app/shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password.routing';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, ForgotPasswordRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: Window, useValue: window }]
})
export class ForgotPasswordModule {}
