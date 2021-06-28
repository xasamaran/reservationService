import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationUrl = 'resource/';

  private readonly dateFormat = moment.HTML5_FMT.DATETIME_LOCAL_SECONDS;

  constructor(private http: HttpClient) {
  }

  get(reservation: { dateTime: moment.Moment, id: number }): Observable<Object> {
    return this.http.get(`${this.reservationUrl}/${reservation.id}/available`, {params: new HttpParams().set('dateTime', moment(reservation.dateTime).format(this.dateFormat))});
  }
}
