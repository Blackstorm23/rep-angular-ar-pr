import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  // url= 'http://localhost:8080/experiencia/'
  url:string="https://porfolio-back-end-63ls.onrender.com/experiencia/";

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public buscar(id: number):Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.url + `buscar/${id}`);
  }

  public crear(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
    }

  public edit(experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', experiencia);
    }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }

  
}