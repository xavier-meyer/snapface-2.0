import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  MySnap! : FaceSnap;
  SecondSnap! : FaceSnap;
  ThirdSnap! : FaceSnap;

  ngOnInit() {
      // on crée un nouvel objet en instanciant la class FaceSnap
      /* Le constructor est appellé automatiquement 
      lors de la création d'un nouvel objet */
      this.MySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis longtemps',
      new Date(),
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      0,

    );
    this.SecondSnap = new FaceSnap(
      'Noel',
      'Mon magnifique sapin et ses cadeaux',
      new Date(),
      'https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg',
      2
    );
    this.ThirdSnap = new FaceSnap(
      'Zoé',
      'Mon magnifique chat siamois',
      new Date(),
      'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg',
      5
    );  
  }
 
}
