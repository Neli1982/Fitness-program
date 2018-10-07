import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PractiseListComponent } from './practise-list/practise-list.component';
//import { StaticDatasourceService } from './models/static-datasource.service';
import { PractiseService } from './models/practise.service';
import { PractiseDetailsComponent } from './practise-details/practise-details.component';
import { PractisesRoutingModule } from './practises-routing/practises-routing.module';
import { ExerciseService } from './models/exercise.service';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PractiseListComponent,
    PractiseDetailsComponent,
    ExerciseListComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PractisesRoutingModule
  ],
  providers: [PractiseService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
