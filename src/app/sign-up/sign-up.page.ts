import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    
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
  ) {}

  ngOnInit() {
  }

  AddRecord()
  {
    let addrecord = {}
    
    addrecord['adresse']  = this.adresse;
    addrecord['avatar']   = this.avatar;
    addrecord['email']    = this.email;
    addrecord['gender']   = this.gender;
    addrecord['password'] = this.password;
    addrecord['phone']    = this.phone;
    addrecord['username'] = this.username;    

    this.firestore.collection('/user/').add(addrecord).then(()=>{
      this.addrecord = {
        adresse   : '', 
        avatar    : '', 
        email     : '',
        gender    : '', 
        password  : '', 
        phone     : '',
        username  : ''
      } 
    });

    window.localStorage.setItem("user",this.addrecord);

    this.nav.navigateForward("/profile");   

  }


}
