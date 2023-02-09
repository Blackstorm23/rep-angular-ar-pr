import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  // url= 'http://localhost:8080/estudios/'
  url:string="https://porfolio-back-end-63ls.onrender.com/estudios/";

  constructor(private httpClient:HttpClient) { }

    public ver(): Observable<Estudios[]>{
      return this.httpClient.get<Estudios[]>(this.url + 'ver');
    }
 
    public buscar(id: number):Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.url + `buscar/${id}`);
    }
  
    public crear(Estudio: Estudios):Observable<any>{
      return this.httpClient.post<any>(this.url + 'crear', Estudio);
      }
  
    public edit(Estudio: Estudios):Observable<any>{
      return this.httpClient.put<any>(this.url + 'edit', Estudio);
      }
  
    public borrar(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `borrar/${id}`);
      }

  
}
