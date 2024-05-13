import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

/* on injecte le routeur dans le component */

constructor(private router: Router){};

/* méthode pour se rediriger vers la page facesnap */

onContinue(): void {
this.router.navigateByUrl('facesnaps');

}

}
