import { Component, OnInit } from '@angular/core';
import { Suscription } from '../../models/suscription';
import { Costumer } from '../../models/costumer';
import { AngularFirestore } from '@angular/fire/firestore';
import { Price } from '../../models/price';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-add-suscriptions',
  templateUrl: './add-suscriptions.component.html',
  styleUrls: ['./add-suscriptions.component.scss']
})
export class AddSuscriptionsComponent implements OnInit {
  
  suscription: Suscription = new Suscription();
  prices: Array<Price> = new Array<Price>();
  selectedCostumer: Costumer = new Costumer();
  selectedPrice: Price = new Price;
  idPrice: string = 'null';
  constructor(private afs: AngularFirestore, public MessagesService: MessagesService) { }

  ngOnInit(): void {
    this.afs.collection('prices').get().subscribe((data)=>{
      data.docs.forEach((item)=>{
        let price = item.data() as Price;
        price.id = item.id;
        price.ref = item.ref;
        this.prices.push(price)
      });
    });
  }
  assignCostumer(costumer: Costumer){
    this.selectedCostumer = costumer;
    this.suscription.costumer = costumer.ref;
  }
  deleteCostumer(){
    this.selectedCostumer = new Costumer();
    this.suscription.costumer = undefined;
  }
  save(){
    if(this.suscription.validate().itsValid){
      let suscription = {
        date: this.suscription.date,
        finalDate: this.suscription.finalDate,
        costumer: this.suscription.costumer,
        price: this.suscription.price,
        subtotal: this.suscription.subtotal,
        iva: this.suscription.iva,
        total: this.suscription.total
      }
      this.afs.collection('suscriptions').add(suscription).then((response)=>{
        this.suscription = new Suscription;
        this.selectedPrice = new Price;
        this.selectedCostumer = new Costumer;
        this.idPrice = 'null';
        this.MessagesService.success('Agregado', 'La suscripción ha sido agregada correctamente');
      }).catch(()=>{
        this.MessagesService.error('Error', 'Lo sentimos, ha ocurrido un error')
      });
    }
    else{
      this.MessagesService.error('Error', this.suscription.validate().message);
    }
  }
  selectPrice(id: string){
    if(id !=''){
      this.selectedPrice = this.prices.find(x=>x.id == id);
      this.suscription.price = this.selectedPrice.ref;
      this.suscription.date = new Date();
      
      let duration: number = this.selectedPrice.duration;
      let finalDate: Date;
      this.suscription.subtotal = this.selectedPrice.price;
      this.suscription.iva = this.suscription.subtotal * .16;
      this.suscription.total = this.suscription.subtotal + this.suscription.iva;
      switch (this.selectedPrice.type) {
        case 1:
          duration = this.selectedPrice.duration;
          finalDate = new Date(this.suscription.date.getFullYear(),this.suscription.date.getMonth(),this.suscription.date.getDate() + duration);
          break;
        case 2:
          duration = this.selectedPrice.duration * 7
          finalDate = new Date(this.suscription.date.getFullYear(),this.suscription.date.getMonth(),this.suscription.date.getDate() + duration);
          break;
        case 3:
          duration = this.selectedPrice.duration * 15
          finalDate = new Date(this.suscription.date.getFullYear(),this.suscription.date.getMonth(),this.suscription.date.getDate() + duration);
          break;
        case 4:
          duration = this.selectedPrice.duration
          finalDate = new Date(this.suscription.date.getFullYear(),this.suscription.date.getMonth() + duration,this.suscription.date.getDate());
          break;
        case 5:
          duration = this.selectedPrice.duration
          finalDate = new Date(this.suscription.date.getFullYear() + duration,this.suscription.date.getMonth(),this.suscription.date.getDate());
          break;
        default:
          finalDate = new Date(this.suscription.date.getFullYear(),this.suscription.date.getMonth(),this.suscription.date.getDate())
          break;
      }
      this.suscription.finalDate = finalDate; 
    }
  }
}
