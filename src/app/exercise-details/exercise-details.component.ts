import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Exercise } from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  @Input() exercise:Exercise;
  @Output('exerciseUpdated') exerciseUpdated:EventEmitter<any> = new EventEmitter();
  addNewExec:boolean = false;
  constructor(private datasource:ExerciseService,
              private router:Router,
              private location:Location) {
    this.router.events
               .subscribe((event)=>{
                 //console.log(event));
                 if( event instanceof NavigationEnd && event.url === '/add'){
                      this.exercise = new Exercise();
                      this.addNewExec = true;
                    }
                    else{
                      this.addNewExec = false;
                    }
            });//subscribe
    }//constructor

  ngOnInit() {
  }

  saveExercise():void{
      this.datasource.saveExercise(this.exercise)
          .subscribe((exercise)=>{
                      this.exercise = exercise;
                      this.exerciseUpdated.emit();
                      },
                      (err)=>console.log(err),
                      ()=>console.log(`add/update completed`));
  }


  goBack():void{
    this.location.back();
  }

}
