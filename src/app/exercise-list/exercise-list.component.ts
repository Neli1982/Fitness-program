import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import { Exercise } from '../models/exercise';
import { Practise } from '../models/practise';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises:Exercise[];
  selectedExercise:Exercise;
  selectedPractise:Practise;

  constructor(private dataSource:ExerciseService) { }

  ngOnInit() {
    this.getExercises();
  }

  getExercises():void{
    this.dataSource.getExerciseList()
                    .subscribe((list)=> this.exercises =list,
                    (err)=>console.log(err),
                    ()=>console.log('Exercise list loaded'));

  }
  onSelectExercise(id:string):void{
    this.dataSource.getExerciseById(id)
                    .subscribe((exercise)=>{
                                console.log(exercise);
                                this.selectedExercise = exercise
                                 },
                                (err)=>console.log(err),
                                ()=>console.log('Exercise loaded'));
  }

  deleteExercise(event, id:string):void{
    event.stopPropagation();
    this.dataSource.deleteExercise(id)
                    .subscribe((status)=>{
                      console.log(status);
                      this.getExercises();
                    },
                    (err)=>console.log(err),
                    ()=>console.log('Exercise deleted'));
  }

  fromChildComponent():void{
    console.log(`From child component`);
  }


}
