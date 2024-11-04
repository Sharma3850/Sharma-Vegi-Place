import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  constructor(public ngFireAuth: AngularFireAuth) { }


  async signup(email: string, password:string){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async login(email:string, password:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async logout() {
    return this.ngFireAuth.signOut()
  }

  // async getProfile(){
  //   return this.ngFireAuth.currentUser;
  // }

  async loginWithGoogle() {
    return this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getUser() {
    return this.ngFireAuth.authState;
  }
  
  async getProfile() {
    const user = firebase.auth().currentUser;
    return user;
  }

}
