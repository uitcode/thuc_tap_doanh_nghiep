import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IStatistics {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class StatisticsRepository extends BaseRepository<IStatistics> {
  resourceType(): string {
    return '/statistics';
  }
}
