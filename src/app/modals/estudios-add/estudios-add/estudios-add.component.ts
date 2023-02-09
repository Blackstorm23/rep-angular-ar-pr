import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';

@Component({
  selector: 'app-estudios-add',
  templateUrl: './estudios-add.component.html',
  styleUrls: ['./estudios-add.component.css']
})
export class EstudiosAddComponent implements OnInit {
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sEstudios: EstudiosService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      nombreInstituto:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:[''],
      titulo:['',[Validators.required]],
      logo:[''],
   })
   }

  ngOnInit(): void {
  }

  get Name(){
    return this.form.get("nombreInstituto");
  }

  get Inicio(){
    return this.form.get("inicio");
  }

  get Titulo(){
    return this.form.get("titulo");
  }
 
  onCreate(): void{
    this.sEstudios.crear(this.form.value).subscribe(data=>{
    alert("Estudio Añadido");
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

