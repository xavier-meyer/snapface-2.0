import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  @ViewChild('emailForm') emailForm!: NgForm;

  userEmail!: string;

/* on injecte le routeur dans le component */

constructor(private router: Router){};

/* méthode pour se rediriger vers la page facesnap */

onContinue(): void {
  this.router.navigateByUrl('facesnaps');
}

/* afficher la valeur de l'email */

onSubmitForm(form:NgForm): void {
  if(this.emailForm.invalid) {
    console.log('Veuillez entrer une adresse mail valide');
  } else {
  console.log(form.value);
  }
}

}
