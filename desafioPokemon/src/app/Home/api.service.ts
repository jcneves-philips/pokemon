import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { types } from 'util';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.apiUrl}`)
  
  }
}
