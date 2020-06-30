import { DocumentReference } from '@angular/fire/firestore';

export class Suscription{
    date: Date;
    finalDate: Date;
    costumer: DocumentReference;
    price: DocumentReference;
    subtotal: number;
    iva: number;
    total: number;
   constructor(){
        this.date = this.date;
        this.finalDate = this.finalDate;
        this.costumer = this.costumer;
        this.price = this.price;
        this.subtotal = this.subtotal;
        this.iva = this.iva;
        this.total = this.total;
    }
    validate(): any{
        let response = {
            itsValid: false,
            message: ''
        }
        if(this.costumer == null || this.costumer == undefined){
            response.itsValid = false;
            response.message = 'Por favor seleccione un cliente';
            return response;
        }
        if(this.price == null || this.price == undefined){
            response.itsValid = false;
            response.message = 'No ha seleccionado un precio';
            return response;
        }
        if(this.date == null || this.date == undefined){
            response.itsValid = false;
            response.message = 'No tiene fecha de inicio';
            return response;
        }
        if(this.finalDate == null || this.finalDate == undefined){
            response.itsValid = false;
            response.message = 'No tiene fecha final';
            return response;
        }
        if(this.subtotal == null || this.subtotal == undefined){
            response.itsValid = false;
            response.message = 'No se ha podido calcular el subtotal';
            return response;
        }
        if(this.iva == null || this.iva == undefined){
            response.itsValid = false;
            response.message = 'No se ha podido calcular el iva';
            return response;
        }
        if(this.total == null || this.total == undefined){
            response.itsValid = false;
            response.message = 'No se ha podido calcular el total';
            return response;
        }
        response.itsValid = true;
        return response;
    }
}