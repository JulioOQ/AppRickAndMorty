import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl='https://rickandmortyapi.com/api'



  constructor(private httpClient:HttpClient) { }

  getAll(page=1):Promise<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/character?page=${page}`).toPromise();

  }


}
