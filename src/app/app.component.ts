import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastergym';
  user: User;
  loading: boolean = true;
  constructor(public auth: AngularFireAuth, private spinner: NgxSpinnerService){ }
  
  ngOnInit(): void {
    if(this.loading){
      this.spinner.show();
    }
    this.auth.user.subscribe(user=>{
      this.user = user;
      this.loading = false;
      this.spinner.hide();
    });
  }
}
