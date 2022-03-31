import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";


interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



    constructor( private authService: AuthService) {



    }


}
