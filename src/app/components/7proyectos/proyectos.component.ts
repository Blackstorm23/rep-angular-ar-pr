import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { PorfolioService } from 'src/app/servicio/porfolio.service';
import { ProyectosService } from 'src/app/servicio/proyectos.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  // proyectos:any;
isLogged: boolean = false;
proyectos: Proyectos[]=[]

  constructor(private sProyectos:ProyectosService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    // this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //   console.log(data); 
    //   this.proyectos=data.proyectos;
    // });
  }

  cargarProyectos():void{
    this.sProyectos.ver().subscribe(data => {this.proyectos=data});    
  }

  delete(id:number){
    if(id != undefined){
      this.sProyectos.borrar(id).subscribe(
        data =>{
          alert("Proyecto eliminado correctamente")
          this.cargarProyectos();
        }, err =>{
          alert("No se pudo eliminar el proyecto")
        })
    }}
}