import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface IContractors {
  id: string;
  name: string;
  sub_name: string;
  phone: string;
  email: string;
  tax_number: string;
  status?: number;
  project_total?: number;
  updated_at: Date;
  created_at: Date;
}
@Injectable({ providedIn: 'root' })
export class ContractorsAdminRepository extends BaseRepository<IContractors> {
  resourceType(): string {
    return '/admin/constructors';
  }
}

@Injectable({ providedIn: 'root' })
export class ContractorsUserRepository extends BaseRepository<IContractors> {
  resourceType(): string {
    return '/user/constructors';
  }
}
