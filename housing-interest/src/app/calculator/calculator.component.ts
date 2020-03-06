import { Component, OnInit, HostListener } from '@angular/core';
import { Options } from 'ng5-slider';
import { Debt } from '../model/Debt.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  period = 20; // chu ky lai
  periodOptions: Options = {
    floor: 3,
    ceil: 30
  };

  interest = 11; // lai suat
  interestOptions: Options = {
    floor: 5,
    step: 0.1,
    ceil: 15
  };

  interestItems: any[] = [
    { id: 1, name: '10%', value: 10 },
    { id: 2, name: '20%', value: 20 },
    { id: 3, name: '30%', value: 30 },
    { id: 4, name: '40%', value: 40 },
    { id: 5, name: '50%', value: 50 },
    { id: 6, name: '60%', value: 60 },
    { id: 7, name: '70%', value: 70 },
    { id: 8, name: '80%', value: 80 },
    { id: 9, name: '90%', value: 90 }
  ];
  selected = 3;

  moneyHouse = 1000000000; // tien nha
  moneyPrepaid: number; // tien tra truoc
  money: number; // tien nha con thieu
  moneyOriginalMonth: number; // tien goc hang thang
  moneyInterestTotal = 0; // tong tien lai

  debts: Debt[] = [];

  constructor() {}

  ngOnInit(): void {
    this.calculate();
  }

  selectOption(id: number) {
    // getted from event
    // console.log(id);

    // getted from binding
    // console.log(this.selected);
    this.calculate();
  }

  calculate() {
    this.reset();

    this.moneyPrepaid =
      (this.moneyHouse * this.interestItems[this.selected - 1].value) / 100;
    this.moneyPrepaid = Math.round(this.moneyPrepaid);

    this.money = this.moneyHouse - this.moneyPrepaid;

    this.moneyOriginalMonth = this.money / (this.period * 12);
    this.moneyOriginalMonth = Math.round(this.moneyOriginalMonth);

    this.debtDescending();
  }

  @HostListener('input', ['$event']) onEvent(event) {
    console.log('onEvent ' + event.target.id);
    switch (event.target.id) {
      case 'price':
      case 'period':
      case 'interest':
        this.calculate();
        break;
      default:
        break;
    }
  }

  reset() {
    this.moneyInterestTotal = 0;
    this.debts = [];
  }

  debtDescending() {
    const periodMonths: number = this.period * 12;

    // tslint:disable-next-line: prefer-const
    let moneyRemaining = this.money;

    // Chua tra lai
    this.debts.push(new Debt(0, moneyRemaining, undefined, undefined));

    for (let i = 1; i < periodMonths + 1; i++) {
      let moneyInterestMonth = (moneyRemaining * this.interest) / (100 * 12);
      moneyInterestMonth = Math.round(moneyInterestMonth);
      // tslint:disable-next-line: prefer-const

      moneyRemaining -= this.moneyOriginalMonth;
      moneyRemaining = moneyRemaining > 0 ? moneyRemaining : 0;

      this.moneyInterestTotal += moneyInterestMonth;

      const debt = new Debt(
        i,
        moneyRemaining,
        this.moneyOriginalMonth,
        moneyInterestMonth
      );
      this.debts.push(debt);
    }
  }
}
