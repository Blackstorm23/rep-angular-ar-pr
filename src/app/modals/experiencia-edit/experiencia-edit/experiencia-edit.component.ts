import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  form:FormGroup;
  experiencia :Experiencia = null;
  constructor(private formBuilder: FormBuilder,
              private sExperiencia: ExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      puesto:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:[''],
      descripcion:['', [Validators.required]],
      logo:[''],
   })
    }
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.buscar(id).subscribe(data => {
      this.experiencia=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Inicio(){
    return this.form.get("inicio");
  }
 
  


  onUpdate():void{
    this.sExperiencia.edit(this.form.value).subscribe(data => {
      alert("Experiencia modificada.");
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
  

}