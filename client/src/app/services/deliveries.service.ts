import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  constructor(private http: HttpClient) { }

  getListDeliveriesByDni(dni: string) {
    return this.http.get(`http://localhost:3000/api/deliveries/?dni=${dni}`);
  }
}
