import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
  faceSnaps!: FaceSnap[];


  ngOnInit() {

      // meilleur solution: définir une propriété qui sera un tableau

      this.faceSnaps = [
        {
          title:'Archibald',
          description:'Mon meilleur ami depuis longtemps',  
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',  
          createdDate: new Date(),
          snaps: 250,
          location: 'Paris',
        },
        {
          title:'Noel',
          description:'Mon plus joli sapin et ses cadeaux',  
          imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg',  
          createdDate: new Date(),
          snaps: 100,
          location: 'New York',
        },
        {
          title:'Zoé',
          description:'Mon magnifique chat siamois',  
          imageUrl: 'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg',  
          createdDate: new Date(),
          snaps: 400,
        },

      ];

  }
  
      // on crée un nouvel objet en instanciant la class FaceSnap
      /* Le constructor est appellé automatiquement 
      lors de la création d'un nouvel objet */
      // dans le cas ou le nombre d'arguments est limité, ou on a définit un constructor dans face-snap.model.TS

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
}


