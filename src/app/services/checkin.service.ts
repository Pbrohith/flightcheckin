import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  reservationurl ="http://localhost:4200/flightservices/reservations/"

  constructor(private _HttpClient:HttpClient) { }

  public getReservation(id:Number):any{
   return this._HttpClient.get(this.reservationurl+id);
  }

  public checkIn(checkInRequest):any{
    return this._HttpClient.put(this.reservationurl,checkInRequest);

  }
}