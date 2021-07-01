import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { LoginRoutingModule } from './login.routing';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: Window, useValue: window }]
})
export class LoginModule {}
