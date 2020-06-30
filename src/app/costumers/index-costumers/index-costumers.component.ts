import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-index-costumers',
  templateUrl: './index-costumers.component.html',
  styleUrls: ['./index-costumers.component.scss']
})
export class IndexCostumersComponent implements OnInit {
  costumers: Array<any> = new Array<any>();
  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    /* this.firestore.collection('costumers').valueChanges().subscribe(data=>{
      this.costumers = data;
    }); */
    this.costumers.length = 0;
    this.firestore.collection('costumers').get().subscribe(data=>{
      for (const item of data.docs) {
        let costumer = item.data();
        costumer.id = item.id;
        costumer.ref = item.ref;
        costumer.fullname= costumer.name+' '+costumer.lastname;
        costumer.fullname = costumer.fullname.substr(0,20);
        this.costumers.push(costumer);
      }
    });
  }

}
