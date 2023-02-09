import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';

@Component({
  selector: 'app-estudios-edit',
  templateUrl: './estudios-edit.component.html',
  styleUrls: ['./estudios-edit.component.css']
})
export class EstudiosEditComponent implements OnInit {
  editar: FormGroup
  estudios :Estudios = null;

  constructor(private fb: FormBuilder, 
    private serviEstudios: EstudiosService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) {
    //Creamos el grupo de controles para el formulario 
    this.editar = this.fb.group({
      id:[''],
      logo:[''],
      nombreInstituto:['', [Validators.required]],
      titulo:['', [Validators.required]],
      inicio:['', [Validators.required]],
      fin:[''],
    })
   }

   ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serviEstudios.buscar(id).subscribe(data => {
      this.estudios=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }
 
  get Nombre(){
    return this.editar.get("nombreInstituto");
  }

  get Titulo(){
    return this.editar.get("titulo");
  }

  get Inicio(){
    return this.editar.get("inicio")
  }

    onUpdate():void{
    this.serviEstudios.edit(this.editar.value).subscribe(data => {
      alert("Estudio modificado.");
      this.router.navigate(['']);
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.editar.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.editar.markAllAsTouched();
    }
  }

}
