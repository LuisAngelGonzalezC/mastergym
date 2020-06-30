import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Suscription } from 'src/app/models/suscription';

@Component({
  selector: 'app-index-suscriptions',
  templateUrl: './index-suscriptions.component.html',
  styleUrls: ['./index-suscriptions.component.scss']
})
export class IndexSuscriptionsComponent implements OnInit {

  suscriptions: Array<any> = new Array<any>();
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.suscriptions.length = 0;
    this.afs.collection('suscriptions').get().subscribe((data)=>{
      data.forEach((suscription)=>{
        let suscriptionObtained = suscription.data();
        suscriptionObtained.id = suscription.id;
        suscriptionObtained.ref = suscription.ref;

        this.afs.doc(suscription.data().costumer.path).get().subscribe((costumer)=>{
          suscriptionObtained.costumerData = costumer.data();
          suscriptionObtained.date = new Date(suscriptionObtained.date.seconds * 1000);
          suscriptionObtained.finalDate = new Date(suscriptionObtained.finalDate.seconds * 1000);
          this.suscriptions.push(suscriptionObtained);
        })
      });
    })
  }

}
