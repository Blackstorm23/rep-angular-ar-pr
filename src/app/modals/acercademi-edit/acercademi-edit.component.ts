import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-acercademi-edit',
  templateUrl: './acercademi-edit.component.html',
  styleUrls: ['./acercademi-edit.component.css']
})
export class AcercademiEditComponent implements OnInit {
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
      descripcion:['',[Validators.required]],
      banner:[''],
      title:[''],
      name:[''],
      frase:[''],
      image:[''],
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

  get Descrip(){
    return this.form.get("descripcion");
  }

  onUpdate():void{
    this.sPersona.edit(this.form.value).subscribe(data => {
      alert("Descripción modificada.");
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