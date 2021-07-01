import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSuppliersComponent } from './pages/search-suppliers/search-suppliers.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchSuppliersRoutingModule } from './search-suppliers.routing';

@NgModule({
  declarations: [SearchSuppliersComponent],
  imports: [CommonModule, SearchSuppliersRoutingModule, SharedModule]
})
export class SearchSuppliersModule {}
