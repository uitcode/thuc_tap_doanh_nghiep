import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IContract {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class ContractRepository extends BaseRepository<IContract> {
  resourceType(): string {
    return '/user/contract';
  }
}
