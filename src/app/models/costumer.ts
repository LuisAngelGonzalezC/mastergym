import { DocumentReference } from '@angular/fire/firestore';

export class Costumer{
    id: string;
    name: string;
    lastname: string;
    email: string;
    birthday: Date;
    img: string;
    phone: string;
    curp: string;
    ref: DocumentReference;
    visible: boolean;

    constructor(){
        this.id = this.id;
        this.name = this.name;
        this.lastname = this.lastname;
        this.email = this.email;
        this.birthday = this.birthday;
        this.img = this.img;
        this.phone = this.phone;
        this.curp = this.curp;
        this.ref = this.ref;
        this.visible = this.visible;
    }
}