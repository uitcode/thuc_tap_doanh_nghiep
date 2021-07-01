import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IPermission {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class PermissionRepository extends BaseRepository<IPermission> {
  resourceType(): string {
    return '/permission';
  }
}
