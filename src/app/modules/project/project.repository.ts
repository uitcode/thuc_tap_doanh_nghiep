import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IProject {
  _id: string;
  index: number;
  name: string;
  supplier: string[];
  status: number;
  created_at: Date;
}
@Injectable({ providedIn: 'root' })
export class UserProjectRepository extends BaseRepository<IProject> {
  resourceType(): string {
    return '/user/projects';
  }
}
