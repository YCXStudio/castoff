webpackJsonp([1,4],{535:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=535},536:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(662),o=n(0),a=n(702),s=n(693);a.a.production&&n.i(o.enableProdMode)(),n.i(i.a)().bootstrapModule(s.a)},68:function(t,e,n){"use strict";var i=n(0),o=n(51),a=n(84),s=(n.n(a),n(82)),r=n(89);n.n(r);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n){this.af=t,this.flashMessage=e,this.router=n,this.folder="listingimages"}return t.prototype.getListings=function(){return this.listings=this.af.database.list("/listings"),this.listings},t.prototype.getListingDetails=function(t){return this.listing=this.af.database.object("/listings/"+t),this.listing},t.prototype.setItemAvailability=function(t,e){this.af.database.object("/listings/"+t).update({availability:e})},t.prototype.addListing=function(t){for(var e=this,n=r.storage().ref(),i=function(i){var a="/"+o.folder+"/"+i.name;n.child(a).put(i).then(function(n){return t.image=i.name,t.path=a,e.listings.push(t)})},o=this,a=0,s=[document.getElementById("image").files[0]];a<s.length;a++){i(s[a])}},t.prototype.bossLogin=function(){this.af.auth.login()},t.prototype.logout=function(){r.auth().signOut(),this.flashMessage.show("You are logged out",{cssClass:"alert-success",timeout:3e3})},t=c([n.i(i.Injectable)(),l("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(f=void 0!==a.FlashMessagesService&&a.FlashMessagesService)&&f||Object,"function"==typeof(d=void 0!==s.Router&&s.Router)&&d||Object])],t);var e,f,d}()},692:function(t,e,n){"use strict";var i=n(0),o=n(472);n.n(o);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.title="app works!"}return t=a([n.i(i.Component)({selector:"app-root",template:n(914),styles:[n(905)]}),s("design:paramtypes",["function"==typeof(e=void 0!==o.Angulartics2GoogleAnalytics&&o.Angulartics2GoogleAnalytics)&&e||Object])],t);var e}()},693:function(t,e,n){"use strict";var i=n(35),o=n(0),a=n(43),s=n(242),r=n(51),c=n(82),l=n(68),f=n(84),d=(n.n(f),n(900)),u=(n.n(d),n(901)),p=(n.n(u),n(646)),g=n(713),m=n(472),h=(n.n(m),n(692)),b=n(697),v=n(699),y=n(701),R=n(698),j=n(694),O=n(696),x=n(700),w=n(695);n.d(e,"a",function(){return A});var _=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},I=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},M=[{path:"",component:b.a},{path:"listings",component:v.a},{path:"listing/:id",component:R.a},{path:"add-listing",component:j.a},{path:"manage-listing",component:x.a},{path:"bossmode",component:w.a}],k={apiKey:"AIzaSyAZHn6vI1FyD4DI0jsVy2h3kvF53_sXloU",authDomain:"kstore-8210a.firebaseapp.com",databaseURL:"https://kstore-8210a.firebaseio.com",storageBucket:"kstore-8210a.appspot.com",messagingSenderId:"556857211268"},S={provider:r.a.Google,method:r.b.Popup},A=function(){function t(){}return t=_([n.i(o.NgModule)({declarations:[h.a,b.a,v.a,y.a,R.a,j.a,d.FileSelectDirective,d.FileDropDirective,O.a,x.a,w.a],imports:[i.BrowserModule,a.a,s.a,r.c.initializeApp(k,S),c.RouterModule.forRoot(M),f.FlashMessagesModule,u.ImageUploadModule,p.a.forRoot(),g.a.forRoot(),m.Angulartics2Module.forRoot([m.Angulartics2GoogleAnalytics])],providers:[l.a],bootstrap:[h.a]}),I("design:paramtypes",[])],t)}()},694:function(t,e,n){"use strict";var i=n(0),o=n(68),a=n(82),s=n(84),r=(n.n(s),n(51));n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,i){var o=this;this.firebaseService=t,this.router=e,this.flashMessage=n,this.af=i,this.src="",this.resizeOptions={resizeMaxHeight:300,resizeMaxWidth:300},this.af.auth.subscribe(function(t){t||(o.router.navigate(["/"]),o.flashMessage.show("Hi there, I don't know you.. Please don't invade my site!",{cssClass:"alert-danger",timeout:1e4}))})}return t.prototype.ngOnInit=function(){},t.prototype.onAddSubmit=function(){var t={title:this.title,price:this.price,description:this.description,availability:"Yes",oldprice:this.oldprice};this.firebaseService.addListing(t),this.router.navigate(["/"])},t.prototype.selected=function(t){this.src=t.resized&&t.resized.dataURL||t.dataURL},t=c([n.i(i.Component)({selector:"app-add-listing",template:n(915),styles:[n(906)]}),l("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object,"function"==typeof(f=void 0!==a.Router&&a.Router)&&f||Object,"function"==typeof(d=void 0!==s.FlashMessagesService&&s.FlashMessagesService)&&d||Object,"function"==typeof(u=void 0!==r.d&&r.d)&&u||Object])],t);var e,f,d,u}()},695:function(t,e,n){"use strict";var i=n(0),o=n(51),a=n(68);n.d(e,"a",function(){return c});var s=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.af=t,this.firebaseService=e}return t.prototype.ngOnInit=function(){},t.prototype.login=function(){this.firebaseService.bossLogin()},t.prototype.logout=function(){this.firebaseService.logout()},t=s([n.i(i.Component)({selector:"app-bossmode",template:n(916),styles:[n(907)]}),r("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(c=void 0!==a.a&&a.a)&&c||Object])],t);var e,c}()},696:function(t,e,n){"use strict";var i=n(0),o=n(51);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){var e=this;this.af=t,this.af.auth.subscribe(function(n){n&&(e.email=t.auth.getAuth().auth.email)})}return t.prototype.ngOnInit=function(){},t=a([n.i(i.Component)({selector:"app-footer",template:n(917),styles:[n(908)]}),s("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object])],t);var e}()},697:function(t,e,n){"use strict";var i=n(0),o=n(51),a=n(84),s=(n.n(a),n(68)),r=n(89);n.n(r);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n){this.af=t,this.flashMessages=e,this.firebaseService=n}return t.prototype.ngOnInit=function(){var t=this;this.firebaseService.getListings().subscribe(function(e){t.listings=e,t.listings.forEach(function(t){r.storage().ref().child(t.path).getDownloadURL().then(function(e){t.path=e})})})},t.prototype.getImagePath=function(t){r.storage().ref().child(t.path).getDownloadURL().then(function(t){return t}).catch(function(t){console.log(t)})},t.prototype.deleteItem=function(t){this.af.database.object("/listings/"+t).remove()},t=c([n.i(i.Component)({selector:"app-home",template:n(918),styles:[n(909)]}),l("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(f=void 0!==a.FlashMessagesService&&a.FlashMessagesService)&&f||Object,"function"==typeof(d=void 0!==s.a&&s.a)&&d||Object])],t);var e,f,d}()},698:function(t,e,n){"use strict";var i=n(0),o=n(68),a=n(82),s=n(84),r=(n.n(s),n(51)),c=n(89);n.n(c);n.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n,i,o){this.firebaseService=t,this.router=e,this.route=n,this.flashMessage=i,this.af=o}return t.prototype.ngOnInit=function(){var t=this;this.id=this.route.snapshot.params.id,this.firebaseService.getListingDetails(this.id).subscribe(function(e){t.listing=e,c.storage().ref().child(t.listing.path).getDownloadURL().then(function(e){t.imageUrl=e}).catch(function(t){console.log(t)})})},t.prototype.setAvailability=function(t){console.log("setAvailability: Function clicked"),console.log(t),t?(this.firebaseService.setItemAvailability(this.id,"YES"),this.flashMessage.show("Item is now available",{cssClass:"alert-success"})):(this.firebaseService.setItemAvailability(this.id,"NO"),this.flashMessage.show("Item is no longer available",{cssClass:"alert-danger"}))},t=l([n.i(i.Component)({selector:"app-listing",template:n(919),styles:[n(910)]}),f("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object,"function"==typeof(d=void 0!==a.Router&&a.Router)&&d||Object,"function"==typeof(u=void 0!==a.ActivatedRoute&&a.ActivatedRoute)&&u||Object,"function"==typeof(p=void 0!==s.FlashMessagesService&&s.FlashMessagesService)&&p||Object,"function"==typeof(g=void 0!==r.d&&r.d)&&g||Object])],t);var e,d,u,p,g}()},699:function(t,e,n){"use strict";var i=n(0),o=n(68);n.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.firebaseService=t}return t.prototype.ngOnInit=function(){var t=this;this.firebaseService.getListings().subscribe(function(e){console.log(e),t.listings=e})},t=a([n.i(i.Component)({selector:"app-listings",template:n(920),styles:[n(911)]}),s("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},700:function(t,e,n){"use strict";var i=n(0),o=n(51),a=n(84),s=(n.n(a),n(68));n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n){this.af=t,this.flashMessages=e,this.firebaseService=n}return t.prototype.ngOnInit=function(){var t=this;this.firebaseService.getListings().subscribe(function(e){t.listings=e})},t=r([n.i(i.Component)({selector:"app-manage-listing",template:n(921),styles:[n(912)]}),c("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(l=void 0!==a.FlashMessagesService&&a.FlashMessagesService)&&l||Object,"function"==typeof(f=void 0!==s.a&&s.a)&&f||Object])],t);var e,l,f}()},701:function(t,e,n){"use strict";var i=n(0),o=n(82),a=n(84),s=(n.n(a),n(68)),r=n(51);n.d(e,"a",function(){return f});var c=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,i){var o=this;this.af=t,this.flashMessage=e,this.firebaseService=n,this.router=i,this.af.auth.subscribe(function(e){e&&(o.userid=e.uid,o.email=t.auth.getAuth().auth.email,o.displayName=t.auth.getAuth().auth.displayName,o.userImg=t.auth.getAuth().auth.photoURL)})}return t.prototype.ngOnInit=function(){},t.prototype.logout=function(){this.firebaseService.logout()},t=c([n.i(i.Component)({selector:"app-navbar",template:n(922),styles:[n(913)]}),l("design:paramtypes",["function"==typeof(e=void 0!==r.d&&r.d)&&e||Object,"function"==typeof(f=void 0!==a.FlashMessagesService&&a.FlashMessagesService)&&f||Object,"function"==typeof(d=void 0!==s.a&&s.a)&&d||Object,"function"==typeof(u=void 0!==o.Router&&o.Router)&&u||Object])],t);var e,f,d,u}()},702:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},905:function(t,e){t.exports=""},906:function(t,e){t.exports=".container{padding-left:0}"},907:function(t,e){t.exports='.login-page{width:360px;padding:8% 0 0;margin:auto}.form{position:relative;z-index:1;background:#fff;max-width:360px;margin:0 auto 100px;padding:45px;text-align:center;box-shadow:0 0 20px 0 rgba(0,0,0,.2),0 5px 5px 0 rgba(0,0,0,.24)}.form button{text-transform:uppercase;outline:0;width:100%;border:0;padding:15px;color:#fff;font-size:14px;-webkit-transition:all .3 ease;transition:all .3 ease;cursor:pointer}.container{position:relative;z-index:1;max-width:300px;margin:0 auto}.container:after,.container:before{content:"";display:block;clear:both}body{background:#76b852;background:-webkit-linear-gradient(right,#76b852,#8dc26f);background:linear-gradient(270deg,#76b852,#8dc26f);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}'},908:function(t,e){t.exports=".footer{position:relative;bottom:0;width:100%;height:auto;background-color:#f5f5f5;margin-top:60px}.container{width:auto;max-width:940px}.footer-info{margin:20px 0}"},909:function(t,e){t.exports=".spacer{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}a{color:#fff;text-decoration:none}#item-price{font-size:18px}.info-container{padding-left:0}#itemImg{cursor:pointer}"},910:function(t,e){t.exports="#itemImg{width:100%}"},911:function(t,e){t.exports=""},912:function(t,e){t.exports=""},913:function(t,e){t.exports="#userimg{margin-top:15px;width:35px;height:35px;border-radius:17.5px;border:1px solid}.dropdown-icon{padding-left:10px}.dropdown-item{padding-right:10px}.material-icons.md-18{font-size:18px}.material-icons.md-24{font-size:24px}.material-icons.md-36{font-size:36px}.material-icons.md-48{font-size:48px}.navbar-right{padding-right:0;padding-left:0;margin-left:10px}"},914:function(t,e){t.exports='<app-navbar></app-navbar>\n\n<div class="container">\n\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n\n</div>\n\n<app-footer></app-footer>\n'},915:function(t,e){t.exports='<h2 class="page-header">Add Listing</h2>\n<form (submit)="onAddSubmit()">\n\n  <div class="form-group">\n    <img [src]="src" [hidden]="!src"><br>\n      <input id="image"\n      name="image"\n       type="file" image-upload\n      (imageSelected)="selected($event)"\n        [resizeOptions]="resizeOptions"\n        [(ngModel)]="image" required>\n        <br>\n  </div>\n\n  <div class="form-group">\n    <label>Title</label>\n    <input class="form-control" type="text" [(ngModel)]="title" name="title" required>\n  </div>\n\n  <div class="form-group">\n    <label>description</label>\n    <input class="form-control" type="text" [(ngModel)]="description" name="description" required>\n  </div>\n  <br>\n  <div class="form-group">\n    <div class="container">\n      <label>Price:</label>\n      <i class="material-icons">attach_money</i>\n      <input style="width:20%;" type="number" [(ngModel)]="price" name="price" required>\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="container">\n      <label>Original:</label>\n      <i class="material-icons">attach_money</i>\n      <input style="width:20%;" type="text" [(ngModel)]="oldprice" name="oldprice">\n      <input style="float: right;" type="submit" value="submit" class="btn btn-success">\n    </div>\n  </div>\n  <br>\n</form>\n\n\n<!-- <form class="form-horizontal" role="form" (submit)="onAddSubmit()">\n   <div class="well well-lg col-md-8">\n     <legend>File Upload: New items to let go</legend>\n\n      <div class="form-group">\n        <div class="col-md-6">\n          <label for="images">Image Upload:</label>\n          <input type="file" id="image" name="image" [(ngModel)]="image"/>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <div class="col-sm-4">\n          <label for="inputItem" class="control-label">Item:</label>\n          <input class="form-control" id="inputItem" placeholder="Ex: Pen" [(ngModel)]="item" required>\n        </div>\n      <!-- </div> -->\n      <!-- <div class="form-group"> -->\n        <!-- <div class="col-sm-4">\n          <label for="inputPrice" class="control-label">Price:</label>\n          <div class="input-group">\n            <span class="input-group-addon">$</span>\n            <input class="form-control" id="inputPrice" placeholder="Ex: 20" [(ngModel)]="price" required>\n          </div>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <div class="col-sm-8">\n          <label for="inputDescription" class="control-label">Descriptions:</label>\n          <input class="form-control" id="inputDescription" placeholder="Item is clean" [(ngModel)]="descriptions" required>\n        </div>\n      </div>\n\n      <div class="form-group">\n        <div class="col-sm-8">\n          <button style="float: right;" type="submit" class="btn btn-success">Add</button>\n        </div>\n      </div>\n    </div>\n  </form> -->\n'},916:function(t,e){t.exports='<div class="login-page">\n  <div class="form">\n    <form class="login-form"  *ngIf="!(af.auth | async)">\n      <button (click)="login()" type="submit" class="btn btn-success">login</button>\n    </form>\n    <form class="login-form" *ngIf="(af.auth | async)">\n      <button [routerLink]="[\'/\']" type="submit" class="btn btn-success">Home</button>\n      <hr>\n      <button (click)="logout()" type="submit" class="btn btn-danger">logout</button>\n    </form>\n  </div>\n</div>\n'},917:function(t,e){t.exports='<footer class="footer">\n  <div class="container">\n    <address class="footer-info">\n        <span class="text-muted">\n          Created by <strong>Shawn Yap</strong> (ACU Student)\n            <br>\n            This is not a sketchy website\n            <br>\n            Email me at: <a href="mailto:scy12a@acu.edu">scy12a@acu.edu</a>\n        </span>\n    </address>\n  </div>\n</footer>\n'},918:function(t,e){t.exports='<div class="jumbotron text-center">\n  <div class="container">\n    <h1>Shawn\'s</h1>\n    <p>Please email scy12a@acu.edu for more information</p>\n  </div>\n</div>\n\n    <div id="products" class="container" *ngFor="let listing of listings">\n      <md-toolbar color="primary">\n        <span>{{listing.title}}</span>\n        <span class="spacer"></span>\n        <button md-icon-button [mdMenuTriggerFor]="menu">\n          <md-icon>more_vert</md-icon>\n        </button>\n        <md-menu #menu="mdMenu">\n          <button (click)="deleteItem(listing.$key)" *ngIf="(af.auth | async)" md-menu-item>\n            <md-icon>clear</md-icon>\n            <span>Delete</span>\n          </button>\n        <button *ngIf="!(af.auth | async)" md-menu-item disabled>\n          <md-icon>clear</md-icon>\n          <span>Delete</span>\n        </button>\n      </md-menu>\n      </md-toolbar>\n\n      <md-card>\n          <img id="itemImg" [routerLink]="[\'/listing/\'+listing.$key]" md-card-image src="{{listing.path}}">\n          <md-card-content>\n            <div class="container">\n              <p>{{listing.description}}</p>\n            </div>\n            <div class="container info-container">\n              <p class="col-sm-4 col-md-4 col-lg-4">Price:  <strong id="item-price">${{listing.price}}</strong> </p>\n              <p class="col-sm-4 col-md-4 col-lg-4">Availability: <strong>{{listing.availability}}</strong></p>\n\n              <a style="float: right;" md-fab color="primary" role="button" href="mailto:scy12a@acu.edu?subject={{listing.title}}">\n                <md-icon>\n                  mail\n                </md-icon>\n              </a>\n            </div>\n\n          </md-card-content>\n      </md-card>\n      <br>\n    </div>\n'},919:function(t,e){t.exports='<div *ngIf="listing">\n  <button [routerLink]="[\'/\']" type="button" class="btn btn-default" aria-label="Left Align">\n    Go Back\n  </button>\n  <h2 class="page-header">{{listing.title}} <small>Availability: {{listing.availability}}</small></h2>\n\n  <div class="row">\n    <div class="col-sm-6 col-md-4">\n      <div class="thumbnail">\n        <img id="itemImg" src="{{imageUrl}}" alt="">\n      </div>\n    </div>\n\n    <div class="col-md-8">\n      <div class="list-group">\n        <li class="list-group-item">Description: <strong>{{listing.description}}</strong></li>\n        <li class="list-group-item">\n          Price: $ <strong>{{listing.price}}</strong>\n        </li>\n        <li class="list-group-item">\n          Original Price: $ <strong>{{listing.oldprice}}</strong>\n        </li>\n      </div>\n      <button *ngIf="(af.auth | async)" (click)="setAvailability(true)" type="button" class="btn btn-success" aria-label="Left Align">\n        Available\n      </button>\n\n      <button *ngIf="(af.auth | async)" (click)="setAvailability(false)" type="button" class="btn btn-danger" aria-label="Left Align">\n        Sold\n      </button>\n      <a style="float: right;" *ngIf="!(af.auth | async)" href="mailto:scy12a@acu.edu?subject={{listing.title}}" class="btn btn-info" role="button">Email me for this item</a>\n    </div>\n  </div>\n</div>\n'},920:function(t,e){t.exports='<div class="jumbotron text-center">\n  <div class="container">\n    <h1>Listings</h1>\n    <p>The hottest items available</p>\n  </div>\n</div>\n<div class="row">\n    <div class="container col-md-3">\n      <ul class="list-group">\n        <li class="list-group-item" *ngFor="let listing of listings">\n          <a [routerLink]="[\'/listing/\'+listing.$key]">{{listing.title}}</a>\n        </li>\n      </ul>\n    </div>\n</div>\n'},921:function(t,e){t.exports='<section class="products">\n\n  <!-- It\'s likely you\'ll need to link the card somewhere. You could add a button in the info, link the titles, or even wrap the entire card in an <a href="..."> -->\n\n  <div class="product-card">\n    <div class="product-image">\n      <img style="width: 200px; height: 200px;" src="../../assets/img/item1.jpg">\n    </div>\n    <div class="product-info">\n      <h5>Winter Jacket</h5>\n      <h6>$99.99</h6>\n    </div>\n  </div>\n\n\n  <!-- more products -->\n\n</section>\n'},922:function(t,e){t.exports='<nav class="navbar navbar-default">\n  <div class="container">\n    <div class="navbar-header">\n      <a class="navbar-brand" [routerLink]="[\'/\']">\n        <span>Sh<i class="material-icons md-18">store</i>wn\'s</span>\n      </a>\n    </div>\n\n    <ul class="nav navbar-nav">\n          <li class="dropdown" *ngIf="(af.auth | async)">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n              <i class="material-icons">menu</i>\n            </a>\n            <ul class="dropdown-menu">\n              <li [routerLink]="[\'/add-listing\']">\n                <button md-button>\n                  <span class="dropdown-item">Add things to sell</span> <i class="material-icons dropdown-icon">add </i>\n                </button>\n              </li>\n              <li>\n                <button md-button disabled>\n                  <span class="dropdown-item">Manage items - @TODO</span>\n                </button>\n              </li>\n              <li>\n                <button md-button disabled>\n                  <span class="dropdown-item">BossmodeView-@TODO</span>\n                </button>\n              </li>\n            </ul>\n          </li>\n    </ul>\n\n    <div class="collapse navbar-collapse">\n      <form class="navbar-form navbar-right" role="search">\n        <button *ngIf="(af.auth | async)" (click)="logout()" type="submit" class="btn btn-danger">logout</button>\n      </form>\n      <ul *ngIf="(af.auth | async)" class="nav navbar-nav navbar-right">\n          <li><p class="navbar-text">Welcome back, {{displayName}}</p> <img id="userimg" src="{{userImg}}" alt=""></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n'},962:function(t,e,n){t.exports=n(536)}},[962]);