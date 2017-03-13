import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email:any;

  constructor(public af:AngularFire,) {
    this.af.auth.subscribe(auth => {
        if (auth){
          this.email = af.auth.getAuth().auth.email;
        }
    });
  }

  ngOnInit() {
  }

}
