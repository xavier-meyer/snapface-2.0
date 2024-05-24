import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  buttonText! : string;
  buttonTextWrong! : string;
  // @input: moyen d'injecter une propriété depuis l'extérieur d'un composant
  // propriété de type FaceSnap c'est un type personnalisé
  faceSnap! : FaceSnap;

  
  // on injecte le service pour se servir de la méthode snapFaceSnap 
  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) {}

  // la méthode ngOnInit est appellée au moment de la création d'une instance du component
  // au moment de l'initialisation du component, on initialise les propriétés
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    this.buttonTextWrong = 'No Snap!';
    /* recuperer le paramètre 'id' du facesnap */
    const faceSnapId = +this.route.snapshot.params['id'];
    /* initialiser la propriété facesnap */
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    
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


