import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IForgotPassword {
  _id: string;
}

@Injectable({ providedIn: 'root' })
export class ForgotPasswordRepository extends BaseRepository<IForgotPassword> {
  resourceType(): string {
    return '/forgot-password';
  }
}
