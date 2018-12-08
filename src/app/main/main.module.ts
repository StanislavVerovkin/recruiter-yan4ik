import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {CandidateTableComponent} from './shared/components/candidate-table/candidate-table.component';
import {CurrencyComponent} from './shared/components/currency/currency.component';
import {MenuComponent} from './shared/components/menu/menu.component';
import {ToDoComponent} from './to-do/to-do.component';
import {CandidatesService} from './shared/services/candidates.service';
import {CurrencyService} from './shared/services/currency.service';
import {CandidatesComponent} from './candidates/candidates.component';
import {AuthService} from './shared/services/auth.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MainRoutingModule,
    ],
    declarations: [
        MainComponent,
        CandidateTableComponent,
        CurrencyComponent,
        MenuComponent,
        ToDoComponent,
        CandidatesComponent
    ],
    providers: [
        CandidatesService,
        CurrencyService,
        AuthService
    ]
})
export class MainModule {
}