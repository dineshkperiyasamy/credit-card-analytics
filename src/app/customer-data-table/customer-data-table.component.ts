import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomerDataService } from '../services/customer-data.service';

@Component({
  selector: 'app-customer-data-table',
  templateUrl: './customer-data-table.component.html',
  styleUrls: ['./customer-data-table.component.scss']
})
export class CustomerDataTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['clientId',	'clientNum',	'attritionFlag',	'customerAge',	'gender',	'dependentCount',	
  'educationLevel',	'maritalStatus',	'incomeCategory',	'cardCategory',	'monthsOnBook',	'totalRelationshipCount',	
  'monthsInactive',	'contactsCount',	'creditLimit',	'totalRevolvingBal',	'avgOpenToBuy',	'amountChangeQt',	'transAmt',	
  'transCount',	'countChangeQt',	'utilRatio' ];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerDataService: CustomerDataService) { 
    
    this.customerDataService.findAllCustomers().subscribe(customers => {
      this.dataSource = new MatTableDataSource(customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
