import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import { CustomerSummary } from "../models/customer-summary"
import { IncomeCategory } from "../models/income-category"

@Injectable()
export class CustomerDataService {

  public responseCache:Observable<Customer[]>;
  public summaryCache:Observable<CustomerSummary[]>;
  public incomeCache:Observable<IncomeCategory[]>;
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
    if(!this.summaryCache){
      this.summaryCache=this.http.get<CustomerSummary[]>(this.URL+'/summary');
    }
    return this.summaryCache;
  }  
  findIncomeCategory(): Observable<IncomeCategory[]> {
    if(!this.incomeCache){
      this.incomeCache=this.http.get<IncomeCategory[]>(this.URL+'/income');
    }
    return this.incomeCache;
  }  
}
