import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface ISearchSuppliers {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class SearchSuppliersRepository extends BaseRepository<ISearchSuppliers> {
  resourceType(): string {
    return '/search-suppliers';
  }
}
