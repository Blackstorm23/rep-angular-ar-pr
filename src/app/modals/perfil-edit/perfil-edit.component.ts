import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {
  form:FormGroup;
  perso:Persona=null;
  constructor(private formBuilder: FormBuilder,
              private sPersona:PersonaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      image:['',[Validators.required]],
      descripcion:[''],
      banner:[''],
      title:[''],
      name:[''],
      frase:[''],
   })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.buscar(id).subscribe(data => {
      this.perso=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Img(){
    return this.form.get("image");
  }

  onUpdate():void{
    this.sPersona.edit(this.form.value).subscribe(data => {
      alert("Foto de perfil Modificada.");
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló en la carga, intente nuevamente.");
      this.form.markAllAsTouched();
    }
  }

}
