import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sSkills: SkillsService) {
     //Creamos el grupo de controles para el formulario 
     this.form= this.formBuilder.group({
      porcentaje:['',[Validators.required]],
      habilidad:['',[Validators.required, Validators.min(0), Validators.max(100)]],
   })
   }

  ngOnInit(): void {
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }
 
  onCreate(): void{
      this.sSkills.crear(this.form.value).subscribe(data=>{
        alert("Skill Añadida")
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

