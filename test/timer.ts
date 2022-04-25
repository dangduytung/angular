import { OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, Subject, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

export class TimerComponent implements OnInit, OnDestroy {
  // Timer
  private reset$ = new Subject();
  private subTimer!: Subscription;
  private timer$!: Observable<number>;

  constructor() {
    this.timer$ = this.reset$.pipe(
      startWith(0),
      switchMap(() => timer(1000, 1000))
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stopTimer();
    this.reset$.unsubscribe();
  }

  startTimer(): void {
    this.subTimer = this.timer$.subscribe((count: number) => {
      console.log(count);
    });
  }

  stopTimer(): void {
    if (this.subTimer) {
      this.subTimer.unsubscribe();
    }
  }

  refreshTimer(): void {
    this.reset$.next(void 0);
  }
}
