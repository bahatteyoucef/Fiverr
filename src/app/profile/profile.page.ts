import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  adresse   : string = "";
  avatar    : string = "";
  email     : string = "";
  gender    : string = "";
  password  : string = "";
  phone     : string = "";
  username  : string = "";

  addrecord: any = [];  

  constructor(
    private firestore: AngularFirestore,
    private modalController: ModalController,
    private nav:NavController
  ) 
  {
    let user  = window.localStorage.getItem("user");
    console.log(user);
  }

  ngOnInit() {
    
  }

}
