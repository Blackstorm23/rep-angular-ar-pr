import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  isLogged:boolean = false;
  estudios: Estudios[]=[]; //se llama al modelo que es un array

  constructor(private sEstudio:EstudiosService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarEstudios();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

    cargarEstudios():void{
      this.sEstudio.ver().subscribe(data => {this.estudios=data});
  }

  delete(id:number){
    if(id != undefined){
      this.sEstudio.borrar(id).subscribe(
        data =>{
          alert("Estudio eliminado correctamente")
          this.cargarEstudios();
        }, err =>{
          alert("no se pudo eliminar el estudio")
        })
    }}
}
