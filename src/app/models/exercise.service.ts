import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Exercise } from './exercise';
import{ Practise} from './practise';

import { Observable } from 'rxjs/Observable';

const URL:string = 'http://localhost:4000';


@Injectable(
  //{providedIn: 'root'}
)
export class ExerciseService {

  constructor(private http:HttpClient) { }


  getExerciseList():Observable<Exercise[]>{

    return this.http.get<Exercise[]>(`${URL}/exercise`);

}
  getExerciseById(id:string):Observable<Exercise>{
    return this.http.get<Exercise>(`${URL}/exercise/${id}`);
  }

  deleteExercise(id:string):Observable<any>{
    return this.http.delete(`${URL}/exercise/${id}`);
  }

  saveExercise(exercise:Exercise):Observable<Exercise>{
    //update
    if(exercise._id){
      return this.http.put<Exercise>(`${URL}/exercise/${exercise._id}`, exercise);
    }
    //save
      else{
        exercise._id = undefined;
        return this.http.post<Exercise>(`${URL}/exercise`, exercise);
      }
    }

}
