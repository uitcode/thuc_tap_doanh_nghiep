import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IProfile {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileRepository extends BaseRepository<IProfile> {
  resourceType(): string {
    return '/auth';
  }
}
