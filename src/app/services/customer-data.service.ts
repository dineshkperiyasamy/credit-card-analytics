import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import { CustomerSummary } from "../models/customer-summary"

@Injectable()
export class CustomerDataService {

  public responseCache:Observable<Customer[]>;
  private readonly URL = 'http://localhost:8080/api/customers';

  constructor(private http:HttpClient) {
  }
  findAllCustomers(): Observable<Customer[]> {
    if(!this.responseCache){
      this.responseCache=this.http.get<Customer[]>(this.URL+'/all');
    }
    return this.responseCache;
  }  
  findAllCustomersSummary(): Observable<CustomerSummary[]> {
    return this.http.get<CustomerSummary[]>(this.URL+'/summary');
  }  
}
