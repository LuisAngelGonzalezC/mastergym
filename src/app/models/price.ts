import { DocumentReference } from '@angular/fire/firestore';

export class Price{
    id: string;
    name: string;
    price: number;
    duration: number;
    type: number;
    ref: DocumentReference;
    constructor(){
        this.id = this.id;
        this.name = this.name;
        this.price = this.price;
        this.duration = this.duration;
        this.type = this.type;
        this.ref = this.ref;
    }
}