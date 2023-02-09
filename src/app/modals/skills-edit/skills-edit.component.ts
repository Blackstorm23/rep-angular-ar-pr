import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {
  form:FormGroup;
  skills :Skills = null;
  constructor(private formBuilder: FormBuilder,
              private sSkills: SkillsService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id: [''],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
      habilidad:['',[Validators.required]],
   })
    }
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkills.buscar(id).subscribe(data => {
      this.skills=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }
  
  onUpdate():void{
    this.sSkills.edit(this.form.value).subscribe(data => {
      alert("Skill modificada.");
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