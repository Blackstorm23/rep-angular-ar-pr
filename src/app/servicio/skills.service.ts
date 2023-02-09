import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  // url= 'http://localhost:8080/skills/'
  url:string="https://porfolio-back-end-63ls.onrender.com/skills/";

  constructor(private httpClient:HttpClient) { }

  public ver(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'ver');
  }

  public buscar(id: number):Observable<Skills>{
  return this.httpClient.get<Skills>(this.url + `buscar/${id}`);
  }

  public crear(skills: Skills):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', skills);
    }

  public edit(skills: Skills):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', skills);
    }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }

}
