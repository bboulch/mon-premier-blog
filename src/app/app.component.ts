import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyDobudpAU7_sn6BtortXEfvdyG8fL9F-E8",
      authDomain: "mon-premier-blog-e88bc.firebaseapp.com",
      databaseURL: "https://mon-premier-blog-e88bc.firebaseio.com",
      projectId: "mon-premier-blog-e88bc",
      storageBucket: "",
      messagingSenderId: "982018720699"
    };
    firebase.initializeApp(config);
  }

}
