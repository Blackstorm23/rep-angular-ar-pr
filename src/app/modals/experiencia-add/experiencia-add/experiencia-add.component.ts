import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicio/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      puesto:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:[''],
      descripcion:['',[Validators.required]],
      logo:[''],
   })
   }

  ngOnInit(): void {
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Inicio(){
    return this.form.get("inicio");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  onCreate(): void{
      this.sExperiencia.crear(this.form.value).subscribe(data=>{alert("Experiencia Añadida")
      window.location.reload();
    });
  }
  
  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
