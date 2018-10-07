import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Practise } from './practise';

import { Observable } from 'rxjs/Observable';

const URL:string = 'http://localhost:4000';

@Injectable(
  //{
  //providedIn: 'root'
 //}
)
export class PractiseService {

  constructor(private http:HttpClient) { }

  getPractiseList():Observable<Practise[]>{
      return this.http.get<Practise[]>(`${URL}/practise`);
  }

  getPractiseById(id:string):Observable<Practise>{
    return this.http.get<Practise>(`${URL}/practise/${id}`);
  }

  deletePractise(id:string):Observable<any>{
    return this.http.delete(`${URL}/practise/${id}`);
  }

  savePractise(practise:Practise):Observable<Practise>{
    //update
    if(practise._id){
      return this.http.put<Practise>(`${URL}/practise/${practise._id}`, practise);
    }
    //save
      else{
        practise._id = undefined;
        return this.http.post<Practise>(`${URL}/practise`, practise);
      }
    }


}
