import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validData: boolean;
  errorText: string;
  constructor(public formBuilder: FormBuilder, public auth: AngularFireAuth, private spinner: NgxSpinnerService) {  }

  ngOnInit(): void {
    this.validData = true;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8),Validators.maxLength(16)
      ])]
    });
  }
  login(){
    if(this.loginForm.valid){
      
      this.spinner.show();
      this.validData = true;
      this.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(user=>{
        this.spinner.hide();
      })
      .catch(error=>{
        this.validData = false;
        this.errorText = error.message;
        this.spinner.hide();
      });
    }
    else{
      this.validData = false;
      this.errorText = "Por favor revisa que los datos esten correctos";
    }
  }
}
