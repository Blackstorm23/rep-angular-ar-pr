import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // URL = 'http://localhost:8080/persona/'
  URL:string="https://porfolio-back-end-63ls.onrender.com/persona/";
  constructor(private httpClient: HttpClient) { }
  
  public ver(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'ver');
  }

  public buscar(id: number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL + `buscar/${id}`);
  }

  public crear(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', persona);
    }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }

  public edit(persona: Persona):Observable<any>{
    return this.httpClient.put<any>(this.URL + 'edit', persona);
    }
}