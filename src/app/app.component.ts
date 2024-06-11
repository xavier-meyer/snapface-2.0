import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { concatMap, mergeMap, exhaustMap, delay, switchMap, take , map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  interval$! : Observable<string>;

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
 
  ngOnInit() {
   
    // 1/ opérateur haut niveau

  interval(500).pipe(
    take(0),
    map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    switchMap(color => this.getTrainObservable$(color)),
    tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
    delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
  return color === 'rouge' ? 'red' : 'yellow';
  }
} 

    
 


  

