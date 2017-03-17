import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';
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
        }
    });
  }

  ngOnInit() {
  }

  logout(){
    this.firebaseService.logout();
  }
}
