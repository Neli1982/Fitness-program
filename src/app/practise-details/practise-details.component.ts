import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Practise } from '../models/practise';
//import { StaticDatasourceService } from '../models/static-datasource.service';

import { PractiseService } from '../models/practise.service';
@Component({
  selector: 'app-practise-details',
  templateUrl: './practise-details.component.html',
  styleUrls: ['./practise-details.component.css']
})
export class PractiseDetailsComponent implements OnInit {
  @Input() practise:Practise;
  @Output('practiseUpdated') practiseUpdated:EventEmitter<any> = new EventEmitter();
  addNewMode:boolean = false;
  constructor(private datasource:PractiseService,
              private router:Router,
              private location:Location) {
    this.router.events
               .subscribe((event)=>{
                 //console.log(event));
                 if( event instanceof NavigationEnd && event.url === '/add-New'){
                      this.practise = new Practise();
                      this.addNewMode = true;
                    }
                    else{
                      this.addNewMode = false;
                    }
            });//subscribe
    }//constructor

  ngOnInit() {
  }

  savePractise():void{
      this.datasource.savePractise(this.practise)
          .subscribe((practise)=>{
                      this.practise = practise;
                      this.practiseUpdated.emit();
                      },
                      (err)=>console.log(err),
                      ()=>console.log(`add/update completed`));
  }


  goBack():void{
    this.location.back();
  }

}
