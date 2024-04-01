import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  buttonText! : string;
  buttonTextWrong! : string;
  // @input: moyen d'injecter une propriété depuis l'extérieur d'un composant
  // propriété de type FaceSnap c'est un type personnalisé
  @Input() faceSnap! : FaceSnap;

  
  // on injecte le service pour se servir de la méthode snapFaceSnap 
  constructor(private faceSnapsService: FaceSnapService){}

  // la méthode ngOnInit est appellée au moment de la création d'une instance du component
  // au moment de l'initialisation du component, on initialise les propriétés
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.buttonTextWrong = 'No Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  noSnap() {
    if (this.buttonTextWrong === 'No Snap!') {
      this.faceSnapsService.noSnapFaceById(this.faceSnap.id, 'snap');
      this.buttonTextWrong = 'Oops, unNoSnap!';
    } else {
      this.faceSnapsService.noSnapFaceById(this.faceSnap.id, 'unsnap');
      this.buttonTextWrong = 'No Snap!';
    }
  }

}


