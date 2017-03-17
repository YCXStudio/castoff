import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-bossmode',
  templateUrl: './bossmode.component.html',
  styleUrls: ['./bossmode.component.css']
})
export class BossmodeComponent implements OnInit {

  constructor(
    private af: AngularFire,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  login(){
    this.firebaseService.bossLogin();
  }

  logout(){
    this.firebaseService.logout();
  }
}
