import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessagesService } from 'src/app/services/messages.service';
import { Price } from 'src/app/models/price';

@Component({
  selector: 'app-index-prices',
  templateUrl: './index-prices.component.html',
  styleUrls: ['./index-prices.component.scss']
})
export class IndexPricesComponent implements OnInit {
  prices: Array<Price> = new Array<Price>();
  form: FormGroup;
  itsEditable: boolean = false;
  id: string;
  constructor(
    public formBuilder: FormBuilder,
    private afs: AngularFirestore,
    public MessagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.show();
  }
  show(){
    this.afs.collection('prices').get().subscribe((data)=>{ 
      this.prices.length = 0;
      for(const item of data.docs){
        let price = item.data() as Price;
        price.id = item.id;
        price.ref = item.ref;
        this.prices.push(price);
      }
    })
  }
  add(){
    this.form.value.type = parseInt(this.form.value.type);
    this.afs.collection<Price>('prices').add(this.form.value as Price).then(()=>{
      this.form.reset();
      this.show();
      this.MessagesService.success('Agregado', 'El precio se agregó correctamente');
    }).catch(()=>{
      this.MessagesService.error('Erro', 'Lo sentimos, ha ocurrido un error');
    });
  }
  edit(price: Price){
    this.itsEditable = true;
    this.form.setValue({
      name: price.name,
      price: price.price,
      duration: price.duration,
      type: price.type
    });
    this.id = price.id;
  }
  update(){
    this.afs.doc('prices/'+this.id).update(this.form.value).then(()=>{
      this.show();
      this.itsEditable = false;
      this.form.reset();
      this.MessagesService.success('Editado', 'El precio se editó correctamente');
    }).catch(()=>{
      this.MessagesService.error('Error', 'Lo sentimos, ha ocurrido un error');
    });
  }
}
