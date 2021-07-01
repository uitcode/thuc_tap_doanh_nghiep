import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IMaterial {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class MaterialRepository extends BaseRepository<IMaterial> {
  resourceType(): string {
    return '/user/supplies';
  }
}
