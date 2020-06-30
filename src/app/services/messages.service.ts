import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  success(title: string, text: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'De acuerdo'
    });
  }
  error(title: string, text: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'De acuerdo'
    });
  }
  warning(title: string, text: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      confirmButtonText: 'De acuerdo'
    });
  }
}
