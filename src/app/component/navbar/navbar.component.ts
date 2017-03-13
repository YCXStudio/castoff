import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email:any;
  userid: string;
  displayName: string;
  userImg: any;

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService,
    private firebaseService: FirebaseService,
    private router:Router
  ) {
    this.af.auth.subscribe(auth => {
        if (auth){
          this.userid = auth.uid;
          this.email = af.auth.getAuth().auth.email;
          this.displayName = af.auth.getAuth().auth.displayName;
          this.userImg = af.auth.getAuth().auth.photoURL;
          console.log(auth);
        }
    });
  }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
    this.flashMessage.show('You are logged out',
    {cssClass: 'alert-success', timeout: 3000});
  }
}
