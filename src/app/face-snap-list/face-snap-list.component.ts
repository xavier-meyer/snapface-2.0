import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  // on accède au service via la propriété faceSnapsService, un service est injecté dans un component
  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit():void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

  }
   
}

// on crée un nouvel objet en instanciant la class FaceSnap
/* Le constructor est appellé automatiquement 
lors de la création d'un nouvel objet */
// dans le cas ou le nombre d'arguments est limité, ou on a définit un constructor dans face-snap.model.TS
// voir constructeur dans fichier face-snap.model.ts

//     this.MySnap = new FaceSnap(
//     'Archibald',
//     'Mon meilleur ami depuis longtemps',  
//     'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',  
//     new Date(),
//     0,
//   );

//   this.SecondSnap = new FaceSnap(
//     'Noel',
//     'Mon magnifique sapin et ses cadeaux',
//     'https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg',  
//     new Date(),
//     2,
//   );

//   this.ThirdSnap = new FaceSnap(
//     'Zoé',
//     'Mon magnifique chat siamois',
//     'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg',  
//     new Date(),
//     5
//   );  
// }
