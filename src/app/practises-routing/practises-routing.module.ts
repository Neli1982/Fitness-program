import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PractiseListComponent } from '../practise-list/practise-list.component';
import { ExerciseListComponent} from '../exercise-list/exercise-list.component';
import { PractiseDetailsComponent } from '../practise-details/practise-details.component';
import { ExerciseDetailsComponent } from '../exercise-details/exercise-details.component';

const routes:Routes = [
  {path:'list', component: PractiseListComponent},
  {path:'add-New', component: PractiseDetailsComponent},
  {path:'exercise', component: ExerciseListComponent },
  {path:'add', component: ExerciseDetailsComponent },  
  {path:'**', redirectTo:'/list'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PractisesRoutingModule { }
