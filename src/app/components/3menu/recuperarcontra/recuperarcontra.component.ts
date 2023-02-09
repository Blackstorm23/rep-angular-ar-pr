import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperarcontra',
  templateUrl: './recuperarcontra.component.html',
  styleUrls: ['./recuperarcontra.component.css']
})
export class RecuperarcontraComponent implements OnInit {
  recuperar!: FormGroup

  constructor(private fb: FormBuilder) {
    this.recuperar = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    })
   }

   get f(){
    return this.recuperar.controls;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
    if (this.recuperar.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio cheto, te enviaremos un mail con las intrucciones para recuperar tu contraseña")
      window.location.replace('/');
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.recuperar.markAllAsTouched();
    }
  
  }

  ngOnInit(): void {
  }

}
