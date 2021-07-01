import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IRegister {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class RegisterRepository extends BaseRepository<IRegister> {
  resourceType(): string {
    return '/register';
  }
}
