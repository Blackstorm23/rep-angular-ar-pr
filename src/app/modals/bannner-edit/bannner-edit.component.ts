import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-bannner-edit',
  templateUrl: './bannner-edit.component.html',
  styleUrls: ['./bannner-edit.component.css']
})
export class BannnerEditComponent implements OnInit {
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
      banner:['',[Validators.required]],
      image:[''],
      descripcion:[''],
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

  get Banner(){
    return this.form.get("banner");
  }

  onUpdate():void{
    this.sPersona.edit(this.form.value).subscribe(data => {
      alert("Banner modificado.");
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
