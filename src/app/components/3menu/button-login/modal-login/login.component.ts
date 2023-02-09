import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicio/auth.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  rol:string[] = [];
  errMsj:string;



  constructor(private readonly fb: FormBuilder, private tokenService: TokenService, private authService: AuthService, private router:Router) { 
    //Creamos el grupo de controles para el formulario 
    this.login= this.fb.group({
      nombreUsuario:['',[Validators.required]],      
      password:['', [Validators.required]],
      
   })
  }


  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLogginFail = false;
        this.rol = this.tokenService.getAuthorities();
    }
  }
//metodos para el formulario

//toma datos de la contraseña
  get Password(){
    return this.login.get("password");
  }
 
  //toma datos del mail
  get Nombre(){
   return this.login.get("nombreUsuario");
  }

  //metodo de validaciòn del password
  get PasswordValid(){
    return this.Password?.touched && !this.Password.valid;
  }

  //metodo de validaciòn del mail
  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre.valid;
  }

    //para el login
    onLogin(): void{
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(
        data => {this.isLogged = true;
        this.isLogginFail= false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.rol = data.authorities;
      window.location.reload()
      // this.router.navigate(['']) asi es por si tengo en otra pagina el login pero yo lo tengo en un modal.
    }, err =>{
      this.isLogged = false;
      this.isLogginFail= true;
      this.errMsj =err.error.mensaje;
      console.log(this.errMsj);
    })
    }

  limpiar(): void{
    this.login.reset();
  }

  //Así lo puse cuando no tenía backend!
    // onEnviar(event: Event){
  //   // Detenemos la propagación o ejecución del compotamiento submit de un form
  //   event.preventDefault; 
  //   if (this.login.valid){
  //     // Llamamos a nuestro servicio para enviar los datos al servidor
  //     // También podríamos ejecutar alguna lógica extra
  //     alert("Todo salio cheto ¡Enviar formulario!")
  //     window.location.replace('/');
  //   }else{
  //     // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
  //     this.login.markAllAsTouched();
  //   }
 
  // }
}
