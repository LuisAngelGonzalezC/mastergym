import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  isCollapsed:boolean;
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.isCollapsed = true;
    this.auth.user.subscribe(user=>{
      this.user = user;
    });
  }
  logout() {
    this.auth.signOut();
  }
}
