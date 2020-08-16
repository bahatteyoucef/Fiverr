import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  email:any;
  password:any;

  constructor(private nav:NavController) {}

  login()
  {  
      firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(resp=>{        
        this.nav.navigateForward("/profile");            
      },err=>{
        
        console.log("ttttt");
        //Fail! Login Failed!
      });
  }

}
