import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-main';


  constructor(private auth: AngularFireAuth) { }

  public user: any;
  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (auth) {
        this.user = auth;
      }
    })
  }


  async login() {
    let provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      alert("Login Successfully!");
    } catch (err) {
      alert("Login Failed!");
    }
  }
}
