import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataServiceMock {
  constructor() { }

  getCustomerinfo(): Array<{}> {
      return [
          {
             clientId: 1,
            clientNum: 1,
            attritionFlag: 'Existing Customer',
            customerAge: 23,
            gender: 'M',
            dependentCount: 2,
            educationLevel: 'College',
            maritalStatus: 'Single',
            incomeCategory: 1,
            cardCategory: 'Silver',
            monthsOnBook: 1,
            totalRelationshipCount: 1,
            monthsInactive: 1,
            contactsCount: 1,
            creditLimit: 1,
            totalRevolvingBal: 1,
            avgOpenToBuy: 1,
            amountChangeQt: 1,
            transAmt: 1,
            transCount: 1,
            countChangeQt: 1,
            utilRatio: 1,
          }
      ];
  }
}
