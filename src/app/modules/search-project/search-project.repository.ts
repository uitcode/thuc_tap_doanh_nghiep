import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface ISearchProject {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class SearchProjectRepository extends BaseRepository<ISearchProject> {
  resourceType(): string {
    return '/search-project';
  }
}
