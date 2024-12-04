import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})






export class ServiceService {

  

  private pathUrl="https://fakestoreapi.com/products"


  constructor(private http: HttpClient) {
    
   }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.pathUrl);
  }
  getCustomer(id:any): Observable<any> {
    return this.http.get<any[]>(this.pathUrl+'/'+id);
  }
  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.pathUrl}`, customer);
  }
  updateCustomer(customer: any): Observable<any> {
    return this.http.put(`${this.pathUrl}/update/${customer.id}`, customer);  // Assuming your API requires the customer ID in the URL
  }

}