import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IOrder {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class OrderRepository extends BaseRepository<IOrder> {
  resourceType(): string {
    return '/order';
  }
}
