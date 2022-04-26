import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  currentNumber = '0';
  firstOperand: any = null;
  operator!: string | null;
  waitForSecondNumber = false;

  ngOnInit(): void {}

  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: any, secondOp: number) {
    console.log('op:' + op + ',' + secondOp + ',' + this.firstOperand);
    switch (op) {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
      default:
        return null;
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  private isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  @HostListener('window:keyup', ['$event']) keyUp(e: KeyboardEvent) {
    // console.log('key up', e);

    if (this.isNumber(e.key)) {
      this.getNumber(e.key);
    } else {
      switch (e.key) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          this.getOperation(e.key);
          break;
        case 'Enter':
          this.getOperation('=');
          break;
        case '.':
          this.getDecimal();
          break;
        case 'Delete':
          this.clear();
          break;
        default:
          break;
      }
    }
  }
}
