import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { delivery } from '../models/delivery';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  API_URI = `http://localhost:3000/api`;

  constructor(private http: HttpClient) { }

  getDeliveries(){
    return this.http.get(`${this.API_URI}/deliveries`); 
  }


  // obtenerPosts():Observable<Post[]>{
  //   return this.http.get(this.URL_API);
  // }

  getListDeliveriesByDni(dni: string) {
    return this.http.get(`${this.API_URI}/deliveries/?dni=${dni}`);
  }

  deleteDelivey(id: string){
    return this.http.delete(`${this.API_URI}/deliveries/?id=${id}`); 
  }

  createDelivery(delivery : delivery){
    return this.http.post(`${this.API_URI}/deliveries`, delivery); 
  }

}
