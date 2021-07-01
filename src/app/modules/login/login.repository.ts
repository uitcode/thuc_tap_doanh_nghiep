import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IHome {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class HomeRepository extends BaseRepository<IHome> {
  resourceType(): string {
    return '/login';
  }
}
