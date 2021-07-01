import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '@app/shared/shared.module';
import { RegisterRoutingModule } from './register.routing';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, CoreModule],
  providers: [{ provide: Window, useValue: window }]
})
export class RegisterModule {}
