import { Injectable } from '@angular/core';
import { Repository as BaseRepository } from '@data/repositories/repository';

export interface ISupplier {
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
export class SupplierUserRepository extends BaseRepository<ISupplier> {
  resourceType(): string {
    return '/user/suppliers';
  }
}

@Injectable({ providedIn: 'root' })
export class SupplierAdminRepository extends BaseRepository<ISupplier> {
  resourceType(): string {
    return '/admin/suppliers';
  }
}
