import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducer';
import * as ui from '../../shared/ui.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  cargando: boolean = false;
  uiSubscription!: Subscription;

  constructor( private fb: FormBuilder,
              private authService: AuthService,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo:   ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ],
    });

    this.uiSubscription = this.store.select('ui').subscribe( ui => {
      this.cargando = ui.isLoadding,
      console.log('cargando subs')
    });
  }



  loginUsuario(){

    if( this.loginForm.invalid ) { return }

    this.store.dispatch( ui.isLoading() )

/*     Swal.fire({
      title: 'Espere por favor...',
      didOpen: () => {
        Swal.showLoading();
      }
    }); */


    const { correo, password } = this.loginForm.value;

    this.authService.SignIn( correo, password)
            .then( () => {
              this.router.navigateByUrl('/dashboard');
              /* Swal.close(); */
              this.store.dispatch( ui.stopLoading() );

            }).catch(  err =>{
              this.store.dispatch( ui.stopLoading() );
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              });
            });
  };

}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

