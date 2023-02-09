import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicio/proyectos.service';

@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos-edit.component.html',
  styleUrls: ['./proyectos-edit.component.css']
})
export class ProyectosEditComponent implements OnInit {
  form:FormGroup;
  proyectos :Proyectos = null;
  constructor(private formBuilder: FormBuilder,
              private sProyectos: ProyectosService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      url:[''],
      fecha:['',[Validators.required]],
      nombreproyec:['',[Validators.required]],
      descripcion:['',[Validators.required]],
   })
    }
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyectos.buscar(id).subscribe(data => {
      this.proyectos=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Fecha(){
    return this.form.get("fecha");
  }

  get Name(){
    return this.form.get("nombreproyec");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
  

  onUpdate():void{
    this.sProyectos.edit(this.form.value).subscribe(data => {
      alert("Proyecto modificado.");
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