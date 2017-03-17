import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title: any;
  price: any;
  oldprice: any;
  description: any;
  image:any;
  availability: any;
  src: string = "";
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    public flashMessage:FlashMessagesService,
    public af:AngularFire
  ) {
    this.af.auth.subscribe(auth => {
        if (!auth){
          this.router.navigate(['/']);
          this.flashMessage.show('Hi there, I don\'t know you.. Please don\'t invade my site!',
          {cssClass: 'alert-danger', timeout: 10000});
        }
    });

   }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      price: this.price,
      description: this.description,
      availability: 'Yes',
      oldprice: this.oldprice
    }

    this.firebaseService.addListing(listing);
    this.router.navigate(['/']);
  }

  resizeOptions: ResizeOptions = {
        resizeMaxHeight: 300,
        resizeMaxWidth: 300
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

}
