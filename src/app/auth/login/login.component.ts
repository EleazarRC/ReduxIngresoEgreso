import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo:   ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ],
    });
  }

  loginUsuario(){

    if( this.loginForm.invalid ) { return }

    Swal.fire({
      title: 'Espere por favor...',
      didOpen: () => {
        Swal.showLoading();
      }
    });


    const { correo, password } = this.loginForm.value;
    this.authService.SignIn( correo, password)
            .then( credenciales => {
              /* console.log(credenciales); */
              Swal.close();
              this.router.navigateByUrl('/dashboard')
            }).catch(  err => Swal.fire({
                                  icon: 'error',
                                  title: 'Oops...',
                                  text: 'Something went wrong!',
                                  footer: '<a href="">Why do I have this issue?</a>'
                                }));
  };

}
