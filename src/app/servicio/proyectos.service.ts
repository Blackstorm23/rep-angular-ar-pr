import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  // url= 'http://localhost:8080/proyectos/'
  url:string="https://porfolio-back-end-63ls.onrender.com/proyectos/";

  constructor(private httpClient:HttpClient) { }

  public ver(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url + 'ver');
  }

  public buscar(id: number):Observable<Proyectos>{
  return this.httpClient.get<Proyectos>(this.url + `buscar/${id}`);
  }

  public crear(proyectos: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyectos);
    }

  public edit(proyectos: Proyectos):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', proyectos);
    }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }

}
