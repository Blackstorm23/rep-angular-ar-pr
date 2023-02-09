import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged: boolean = false;
  experiencia: Experiencia[]=[]

  constructor(private sExperiencia:ExperienciaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencia=data});    
  }

  delete(id:number){
    if(id != undefined){
      this.sExperiencia.borrar(id).subscribe(
        data =>{
          alert("Experiencia eliminada correctamente")
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
    }}
}