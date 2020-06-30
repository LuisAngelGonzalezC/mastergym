import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Costumer } from '../models/costumer';

@Component({
  selector: 'app-select-costumer',
  templateUrl: './select-costumer.component.html',
  styleUrls: ['./select-costumer.component.scss']
})
export class SelectCostumerComponent implements OnInit {

  costumers: Array<Costumer> = new Array<Costumer>();
  @Input('name') name: string;
  @Output('selectedCostumer') selectedCostumer = new EventEmitter();
  @Output('canceledCostumer') canceledCostumer = new EventEmitter();
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection('costumers').get().subscribe((data)=>{
      this.costumers.length = 0;
      data.docs.forEach((item)=>{
        let costumer:any = item.data();
        costumer.id = item.id;
        costumer.ref = item.ref;
        costumer.visible = false;
        this.costumers.push(costumer);
      });
    });
  }
  
  searchCostumers(name: string){
    this.costumers.forEach((costumer)=>{
      if(costumer.name.toLowerCase().includes(name.toLowerCase()))
      {
        if(name == ''){
          this.costumers.forEach((costumer)=>{
            costumer.visible = false;
          });
        }
        else{
          costumer.visible = true;
        }
      }
      else
      {
        costumer.visible = false;
      }
    });
  }
  selectCostumer(costumer: Costumer){
    this.name = costumer.name + ' ' + costumer.lastname;
    this.costumers.forEach((costumer)=>{
      costumer.visible = false;
    });
    this.selectedCostumer.emit(costumer);
  }
  deleteCostumer(){
    this.name = undefined;
    this.canceledCostumer.emit();
  }
}
