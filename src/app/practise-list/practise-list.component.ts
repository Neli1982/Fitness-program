import { Component, OnInit } from '@angular/core';
import { PractiseService } from '../models/practise.service';
import { Practise } from '../models/practise';

@Component({
  selector: 'app-practise-list',
  templateUrl: './practise-list.component.html',
  styleUrls: ['./practise-list.component.css']
})
export class PractiseListComponent implements OnInit {
  practises:Practise[];
  selectedPractise:Practise;
  title:string = 'Фитнес програми';

  constructor(private dataSource:PractiseService) { }

  ngOnInit() {
    this.getPractises();
  }

  getPractises():void{
    this.dataSource.getPractiseList()
                    .subscribe((list)=>this.practises=list,
                    (err)=>console.log(err),
                    ()=>console.log('Practise list loaded'));

  }
  onSelectPractise(id:string):void{
    this.dataSource.getPractiseById(id)
                    .subscribe((practise)=>{
                                console.log(practise);
                                this.selectedPractise = practise
                                 },
                                (err)=>console.log(err),
                                ()=>console.log('practise loaded'));
  }

  deletePractise(event, id:string):void{
    event.stopPropagation();
    this.dataSource.deletePractise(id)
                    .subscribe((status)=>{
                      console.log(status);
                      this.getPractises();
                    },
                    (err)=>console.log(err),
                    ()=>console.log('practise deleted'));
  }

  fromChildComponent():void{
    console.log(`From child component`);
  }

}
