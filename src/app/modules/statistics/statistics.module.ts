import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SharedModule } from '@app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics.routing';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, StatisticsRoutingModule, SharedModule]
})
export class StatisticsModule {}
