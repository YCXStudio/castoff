import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';
import * as fb from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listings: any;
  constructor(
    public af: AngularFire,
    public flashMessages: FlashMessagesService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      this.listings = listings;
    })
  }

  login(){
    this.af.auth.login();
  }
}
