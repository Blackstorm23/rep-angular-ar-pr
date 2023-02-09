import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';
import { PorfolioService } from 'src/app/servicio/porfolio.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona:Persona=null;
  isLogged:boolean=false;


  constructor( public personaService: PersonaService, private tokenService: TokenService){} 
  //private datosPorfolio:PorfolioService, asi era con el json) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    // this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //   console.log(data); 
    //   this.perfil=data;
    // });
  }
  
  cargarPersona():void{
    this.personaService.buscar(1).subscribe(data => 
      {this.persona=data});
  }
}
