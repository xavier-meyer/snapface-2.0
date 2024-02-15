import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  buttonText! : string;
  // @input: moyen d'injecter une propriété depuis l'extérieur d'un composant
  // propriété de type FaceSnap c'est un type personnalisé
  @Input() faceSnap! : FaceSnap;

 
  // la méthode ngOnInit est appellée au moment de la création d'une instance du component
  // au moment de l'initialisation du component, on initialise les propriétés
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}


