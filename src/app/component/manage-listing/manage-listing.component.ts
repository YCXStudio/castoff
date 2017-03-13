import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-manage-listing',
  templateUrl: './manage-listing.component.html',
  styleUrls: ['./manage-listing.component.css']
})

export class ManageListingComponent implements OnInit {
  listings: any;
  constructor(
    public af: AngularFire,
    public flashMessages: FlashMessagesService,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      this.listings = listings;
    })
  }
}
