import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { CustomerDataService } from '../services/customer-data.service';
import { IncomeCategory } from '../models/income-category';
import { CustomerSummary } from '../models/customer-summary';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{
  cardLayout = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
        columns: 1,
        miniCard: { cols: 1, rows: 2 },
        chart: { cols: 1, rows: 2 },
        table: { cols: 1, rows: 4 },
      };
    }

   return {
      columns: 4,
      miniCard: { cols: 2, rows: 2 },
      chart: { cols: 2, rows: 3 },
      table: { cols: 4, rows: 4 },
    };
  })
);

miniCardData: CustomerSummary[];
pieData: IncomeCategory[];
constructor(private breakpointObserver: BreakpointObserver, private customerService: CustomerDataService) {}

ngOnInit() {
  this.customerService.findAllCustomersSummary().subscribe({
    next: customerData => {
      this.miniCardData = customerData;
    }
  });
  this.customerService.findIncomeCategory().subscribe({
    next: incomeData => {
      this.pieData = incomeData;
    }
  });
}
}