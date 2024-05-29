import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  interval$! : Observable<string>;
 
  ngOnInit() {
    /* methode pipe: appliquer un opérateur à un observable ici, map est l'opérateur */
    /* opérateur map : transformer les émissions des observables */
    /* opérateur filter : filtrer les émissions */
    this.interval$ = interval(1000).pipe(
      filter( value => value % 3 === 0 && value > 0),
      map( value => value % 2 === 0 ? 
        `${ value } est un nombre pair et un nombre divisible par 3` :
        `${ value } est un nombre impair et un nombre divisible par 3`
      ),
    tap( message => this.logger(message))
    );
  }   

  logger(message: string) {
    console.log(`${ message } et ceci s'autodétruira dans 20 secondes.`);
  }
}  



  
