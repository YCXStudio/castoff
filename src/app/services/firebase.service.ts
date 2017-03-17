import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseAuthState } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  folder: any;

  constructor(
    private af: AngularFire,
    public flashMessage:FlashMessagesService,
    private router: Router
  ) {
    this.folder = 'listingimages';
  }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  setItemAvailability(id, value){
    this.af.database.object('/listings/'+id).update({availability: value});
  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        // console.log('Image name: ' + selectedFile.name);
        listing.image = selectedFile.name;
        // console.log('spaceRef' + spaceRef);
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

  bossLogin() {
    this.af.auth.login();
    // @TODO - reroute to REAL BOSS PAGE with analytics

  }

  logout(){
    firebase.auth().signOut();
    this.flashMessage.show('You are logged out',
    {cssClass: 'alert-success', timeout: 3000});
  }
}

interface Listing{
  $key?: string;
  title?: string;
  image?: string;
  price?: string;
  path?: string;
  description?: string;
  oldprice?: string;
}
