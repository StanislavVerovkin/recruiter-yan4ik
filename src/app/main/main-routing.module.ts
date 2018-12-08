import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {CandidatesComponent} from './candidates/candidates.component';
import {ToDoComponent} from './to-do/to-do.component';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [
    {
        path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
            {path: 'candidates', component: CandidatesComponent},
            {path: 'to-do', component: ToDoComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MainRoutingModule {
}