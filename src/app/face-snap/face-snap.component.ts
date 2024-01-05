import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  // on déclare les propriétés 
  title! : string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imageUrl! : string;
  flop! : number;

  // la méthode ngOnInit est appellée au moment de la création d'une instance du component
  // au moment de l'initialisation du component, on initialise les propriétés
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis longtemps';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.flop = 4;
  }
 
}