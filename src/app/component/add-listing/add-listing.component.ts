import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: any;
  price: any;
  description: any;
  image:any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    public flashMessage:FlashMessagesService,
    public af:AngularFire
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){

    let listing = {
      title: this.title,
      price: this.price,
      description: this.description
    }

    this.firebaseService.addListing(listing);

    // this.router.navigate(['/']);
  }

}
