import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PorfolioService } from 'src/app/servicio/porfolio.service';
import { SkillsService } from 'src/app/servicio/skills.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // skills:any;
isLogged: boolean = false;
skills: Skills[]=[]

  constructor(private sSkills:SkillsService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    // this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //   console.log(data); 
    //   this.skills=data.skills;
    // });
  }

  cargarSkills():void{
    this.sSkills.ver().subscribe(data => {this.skills=data});    
  }

  delete(id:number){
    if(id != undefined){
      this.sSkills.borrar(id).subscribe(
        data =>{
          alert("Skill eliminada correctamente")
          this.cargarSkills();
        }, err =>{
          alert("no se pudo eliminar la skill")
        })
    }}
  }