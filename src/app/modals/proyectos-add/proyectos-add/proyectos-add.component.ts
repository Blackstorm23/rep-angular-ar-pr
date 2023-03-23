import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicio/proyectos.service';

@Component({
  selector: 'app-proyectos-add',
  templateUrl: './proyectos-add.component.html',
  styleUrls: ['./proyectos-add.component.css']
})
export class ProyectosAddComponent implements OnInit {
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sProyectos: ProyectosService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      url:[''],
      fecha:['',[Validators.required]],
      nombreproyec:['',[Validators.required]],
      descripcion:['',[Validators.required]],
   })
   }

  ngOnInit(): void {
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
 
  onCreate(): void{
      this.sProyectos.crear(this.form.value).subscribe(data=>{
        alert("Proyecto Añadido")
      window.location.reload();
    });
    alert("Proyecto Añadido")
    window.location.reload();
  }
  
  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("Falló en la carga, intente nuevamente.");
      this.form.markAllAsTouched();
    }
  }
}

