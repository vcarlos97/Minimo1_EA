import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brote } from '../model/brote';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BroteService {

  constructor(private http:HttpClient) { }

  getBrotes(){
    return this.http.get<Brote[]>(environment.apiURL + '/brote/all');
  }

  updateBrote(brote: any){
    return this.http.post(environment.apiURL + '/brote/update');
  }
}
