import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Debt } from '../model/Debt.model';
import { Constants } from '../const/Constants';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor() {}

  getDebts(
    money: number,
    moneyOriginalMonth: number,
    months: number,
    interest: number,
    preferentialMonth: any
  ): Observable<Debt[]> {
    const debts: Debt[] = [];

    let moneyInterestMonth: number;
    let moneyInterestPreference: number;

    debts.push(new Debt(0, money, 0, 0, 0));

    for (let i = 1; i < months + 1; i++) {
      moneyInterestMonth = Math.round((money * interest) / (100 * 12));
      moneyInterestPreference = undefined;

      if (preferentialMonth !== undefined) {
        if (i <= preferentialMonth.month) {
          moneyInterestPreference = Math.round((money * preferentialMonth.interest) / (100 * 12));
        }
      }

      money -= moneyOriginalMonth;

      const debt = new Debt(i, money, moneyOriginalMonth, moneyInterestMonth, moneyInterestPreference);
      debts.push(debt);
    }
    return of(debts);
  }

  getPreferentialMonths(bankPreference: any) {
    const preferentialMonths: any[] = [];
    if (bankPreference !== undefined) {
      if (bankPreference.c !== undefined) {
        preferentialMonths.push({month: Constants.PREFERENCE_MONTHS.c, interest : bankPreference.c});
      }
      if (bankPreference.d !== undefined) {
        preferentialMonths.push({month: Constants.PREFERENCE_MONTHS.d, interest : bankPreference.d});
      }
      if (bankPreference.e !== undefined) {
        preferentialMonths.push({month: Constants.PREFERENCE_MONTHS.e, interest : bankPreference.e});
      }
      if (bankPreference.f !== undefined) {
        preferentialMonths.push({month: Constants.PREFERENCE_MONTHS.f, interest : bankPreference.f});
      }
      if (bankPreference.g !== undefined) {
        preferentialMonths.push({month: Constants.PREFERENCE_MONTHS.g, interest : bankPreference.g});
      }
    }
    console.log('preferentialMonths : ' + JSON.stringify(preferentialMonths));
    return preferentialMonths;
  }

}

