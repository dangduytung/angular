import { Observable } from "rxjs";
import { of } from 'rxjs/Observable/of';
import { map } from 'rxjs/operator/map';

// Observable::of(1,2,3)::map(x => x + '!!!!');

// const observable = Rx.Observable.create(function subscribe(observer) {
//     let value = 0;
//     const intervalID = setInterval(() => {
//         observer.next(value++);
//     }, 1000);

//     return function unsubscribe() {
//         clearInterval(intervalID);
//     };
// });

// const subscription = observable.subscribe(x => console.log(x));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);

console.log('AAA');
