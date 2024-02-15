
export class FaceSnap {

    // si beaucoup d'arguments

    title!: string;
    description! : string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    // ? au lieu de ! => ? : propriété optionnelle
    location?: string;

    // le constructeur n'est pas toujours nécessaire si trop d'arguments

    // constructor(public title: string,
    //             public description: string,
    //             public imageUrl: string, 
    //             public createdDate: Date,
    //             public snaps: number) {
       
    // }    
}

