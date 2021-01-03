import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import { CustomerSummary } from "../models/customer-summary"
import { IncomeCategory } from "../models/income-category"
import { environment } from "../../environments/environment"
import { Tables } from "../models/tables";
import { Ages } from "../models/ages";


@Injectable()
export class CustomerDataService {

  public responseCache:Observable<Customer[]>;
  public summaryCache:Observable<CustomerSummary[]>;
  public incomeCache:Observable<IncomeCategory[]>;
  public tablesCache:Observable<Tables[]>;
  public currentAges:Observable<Ages[]>;
  public attritedAges:Observable<Ages[]>;

  URL = environment.API_URL;

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
  findTables(): Observable<Tables[]> {
    if(!this.tablesCache){
      this.tablesCache=this.http.get<Tables[]>(this.URL+'/table');
    }
    return this.tablesCache;
  } 
  findAttritedAgesByType(): Observable<Ages[]>{
    return this.http.get<Ages[]>(this.URL+'ages',{params:{type: 'Attrited Cusomter'}});
  }
  findCurrentAgesByType(): Observable<Ages[]>{
    return this.http.get<Ages[]>(this.URL+'ages',{params:{type: 'Exisitng Cusomter'}});
  }
}