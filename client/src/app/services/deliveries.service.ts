import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Delivery } from '../models/delivery';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDeliveries(){
    return this.http.get(`${this.API_URI}/api/deliveries`); 
  }

  getListDeliveriesByDni(dni: string) {
    const params = { dni: dni };
    return this.http.get(`${this.API_URI}/api/deliveries/search`, { params });
  }

  deleteDelivey(id: string){
    return this.http.delete(`${this.API_URI}/api/deliveries/?id=${id}`); 
  }

  createDelivery(delivery : Delivery){
    return this.http.post(`${this.API_URI}/api/deliveries`, delivery); 
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.API_URI}/api/deliveries/services`);
  }

  getRoles(): Observable<any> {
    return this.http.get(`${this.API_URI}/api/deliveries/roles`);
  }
}
