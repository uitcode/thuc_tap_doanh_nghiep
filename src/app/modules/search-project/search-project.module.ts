import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProjectComponent } from './pages/search-project/search-project.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchProjectRoutingModule } from './search-project.routing';

@NgModule({
  declarations: [SearchProjectComponent],
  imports: [CommonModule, SearchProjectRoutingModule, SharedModule]
})
export class SearchProjectModule {}
