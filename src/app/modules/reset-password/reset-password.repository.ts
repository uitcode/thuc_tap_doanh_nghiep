import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IResetPassword {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class ResetPasswordRepository extends BaseRepository<IResetPassword> {
  resourceType(): string {
    return '/reset-password';
  }
}
