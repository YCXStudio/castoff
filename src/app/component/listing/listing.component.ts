import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    public flashMessage:FlashMessagesService,
    public af:AngularFire
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    this.firebaseService.getListingDetails(this.id).subscribe(listing=> {
      this.listing = listing;
      console.log(listing);

      // @TODO - Storage ref
    });
  }

  setAvailability(itemSold){
    console.log("setAvailability: Function clicked");
    console.log(itemSold);
    // @TODO - Set item availability
    if (itemSold){
      this.firebaseService.setItemAvailability(this.id, 'YES');
      this.flashMessage.show('Item is now available',
      {cssClass: 'alert-success'});
    } else {
      this.firebaseService.setItemAvailability(this.id, 'NO');
      this.flashMessage.show('Item is no longer available',
      {cssClass: 'alert-danger'});
    }
  }

}
