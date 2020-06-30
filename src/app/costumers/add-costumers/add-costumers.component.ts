import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-add-costumers',
  templateUrl: './add-costumers.component.html',
  styleUrls: ['./add-costumers.component.scss']
})
export class AddCostumersComponent implements OnInit {
  
  img: string;
  percentage: number;
  itsEditable: boolean;
  id: string;
  form: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    public storage: AngularFireStorage,
    private afs: AngularFirestore,
    private ActivatedRoute: ActivatedRoute,
    public MessagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.percentage = 0;
    this.itsEditable = false;
    
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.pattern('[a-zA-Z ]*')
      ])],
      lastname: ['', Validators.compose([
        Validators.required, Validators.pattern('[a-zA-Z ]*')
      ])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      curp: [''],
      birthday: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10), Validators.required
      ])],
      img: ['', Validators.required]
    });
    //Recibibe la información del cliente para poder modificarlo
    this.id = this.ActivatedRoute.snapshot.params.id;
    if (this.id != undefined) {
      this.itsEditable = true;
      this.form.controls.img.clearValidators();
      this.afs.doc<any>('costumers'+ '/' +this.id).valueChanges().subscribe(data=>{
        this.form.setValue({
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          curp: data.curp,
          birthday: new Date(data.birthday.seconds * 1000).toISOString().substr(0,10),
          img: ''
        });
        this.img = data.img;
      });
    }   
  }
  addCostumer(){
    this.form.value.img = this.img;
    this.form.value.birthday = new Date(this.form.value.birthday)
    this.afs.collection('costumers').add(this.form.value).then(response=>{
      this.form.reset();
      this.MessagesService.success('Agregado', 'El cliente ha sido agregado correctamente');
    }).catch(()=>{
      this.MessagesService.error('Error', 'Lo sentimos, ha ocurrido un error');
    });
  }
  editCostumer(){
    this.form.value.img = this.img;
    this.form.value.birthday = new Date(this.form.value.birthday);
    this.afs.doc('costumers/'+this.id).update(this.form.value).then(result=>{
      this.MessagesService.success('Editado', 'La información del cliente ha sido editado correctamente');
    }).catch(()=>{
      this.MessagesService.error('Error', 'Lo sentimos, ha ocurrido un error');
    });
  }
  uploadImage(event){
    if(event.target.files.length > 0){
      const date = new Date().getTime().toString();
      let file = event.target.files[0];
      let extension = file.name.toString().substring(file.name.toString().lastIndexOf('.'));
      let filePath= "img-costumers/" + date + extension;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.percentageChanges().subscribe(percentage=>{
        this.percentage = parseInt(percentage.toString());
      });
      task.then(response=>{
        ref.getDownloadURL().subscribe(url=>{
          this.img = url;
        });
      });
    }
  }
}
