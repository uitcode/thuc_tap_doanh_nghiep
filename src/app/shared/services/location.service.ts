import { Injectable } from '@angular/core';
import { ApiService } from '@app/data/api.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface ILocation {
  id: number;
  name: string;
}

// interface IResponse {
//   body: {
//     status: string;
//     success: boolean;
//     data: ILocation;
//     pagination: any;
//   }
// }

@Injectable()
export class LocationService {
  constructor(private apiService: ApiService) {}

  getListProvince(): Observable<any> {
    return this.apiService.get('/provinces?page[size]=63').pipe(
      map(resp => {
        return resp.body.data;
      })
    );
  }

  getListDistrict(provinceId: ILocation) {
    return this.apiService.get(`/districts?filter[province_id]=${provinceId.id}`).pipe(
      map(resp => {
        return resp.body.data;
      })
    );
  }

  getListWard(provinceId: ILocation, districtId: ILocation): Observable<any> {
    return this.apiService
      .get(`/wards?filter[province_id]=${provinceId.id}&filter[district_id]=${districtId.id}`)
      .pipe(
        map(resp => {
          return resp.body.data;
        })
      );
  }
}
