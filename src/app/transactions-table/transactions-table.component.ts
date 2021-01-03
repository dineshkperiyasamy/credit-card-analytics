import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Tables } from '../models/tables';
import { CustomerDataService } from '../services/customer-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})

export class TransactionsTableComponent implements AfterViewInit {

  displayedColumns = ['clientNum', 
    'attritionFlag',
    'creditLimit',
    'totalRevolvingBal',
    'avgOpenToBuy',
    'amountChangeQt',
    'transAmt',
    'transCount',
    'countChangeQt',
    'utilRatio'
  ];
  dataSource: MatTableDataSource<Tables>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerDataService: CustomerDataService) { 
    
    this.customerDataService.findTables().subscribe(tables => {
      this.dataSource = new MatTableDataSource(tables);
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
