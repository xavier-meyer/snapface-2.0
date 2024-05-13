import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

// le service doit etre enregistré à la racine de l'application
@Injectable({
    providedIn: 'root',

})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title:'Archibald',
          description:'Mon meilleur ami depuis longtemps',  
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',  
          createdDate: new Date(),
          snaps: 250,
          noSnaps : 350,
          location: 'Paris',
        },
        {
          id: 2,
          title:'Noel',
          description:'Mon plus joli sapin et ses cadeaux',  
          imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg',  
          createdDate: new Date(),
          snaps: 100,
          noSnaps : 0,
          location: 'New York',
        },
        {
          id: 3,
          title:'Zoé',
          description:'Mon magnifique chat siamois',  
          imageUrl: 'https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg',  
          createdDate: new Date(),
          snaps: 400,   
          noSnaps : 50, 
        },
    ];  

    // méthode qui va permettre de récupérer les facesnaps
    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    /* méthode pour sélectionner le bon facesnap par son id */
    
    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error('FaceSnap not found!');
      } else {
        return faceSnap;
      }
    }
    
    /* literal types */
    // méthode pour ajouter ou enlever des snaps
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  
    }

   noSnapFaceById(faceSnapId: number, noSnapType: 'snap'| 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    noSnapType === 'snap' ? faceSnap.noSnaps++ : faceSnap.noSnaps--;
   }
}

