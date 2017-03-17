import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes} from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import * as firebase from 'firebase';
import { ImageUploadModule } from 'ng2-imageupload';
import { MaterialModule } from '@angular/material';
import { Angular2FlexModule } from 'angular2-flex';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListingsComponent } from './component/listings/listings.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListingComponent } from './component/listing/listing.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';
import { FooterComponent } from './component/footer/footer.component';
import { ManageListingComponent } from './component/manage-listing/manage-listing.component';
import { BossmodeComponent } from './component/bossmode/bossmode.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'manage-listing', component: ManageListingComponent},
  {path: 'bossmode', component: BossmodeComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyAZHn6vI1FyD4DI0jsVy2h3kvF53_sXloU",
  authDomain: "kstore-8210a.firebaseapp.com",
  databaseURL: "https://kstore-8210a.firebaseio.com",
  storageBucket: "kstore-8210a.appspot.com",
  messagingSenderId: "556857211268"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    FileSelectDirective,
    FileDropDirective,
    FooterComponent,
    ManageListingComponent,
    BossmodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ImageUploadModule,
    MaterialModule.forRoot(),
    Angular2FlexModule.forRoot(),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
