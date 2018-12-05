import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CandidatesComponent} from './components/candidates/candidates.component';
import {ToDoComponent} from './components/to-do/to-do.component';

const routes: Routes = [
  {path: '', redirectTo: 'candidates', pathMatch: 'full'},
  {path: 'candidates', component: CandidatesComponent},
  {path: 'to-do', component: ToDoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
