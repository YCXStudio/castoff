import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listings: any;
  imageUrl: any;
  constructor(
    public af: AngularFire,
    public flashMessages: FlashMessagesService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      this.listings = listings;

      this.listings.forEach(item => {
        firebase.storage().ref().child(item.path)
          .getDownloadURL()
          .then(url => {
            item.path = url;
          });
      })
    })

  }

  getImagePath(listing) {
    let storageRef = firebase.storage().ref();
    // console.log('storageRef: ' + storageRef);
    let spaceRef = storageRef.child(listing.path);
    // console.log('spaceRef: ' + spaceRef);

    spaceRef.getDownloadURL().then((url)=> {
      // console.log('url: ' + url);
      return url;
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteItem(id) {
    this.af.database.object('/listings/'+id).remove();
  }
}
