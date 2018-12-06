import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressRouterModule} from '@ngx-progressbar/router';
import {MenuComponent} from './components/menu/menu.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CandidatesComponent} from './components/candidates/candidates.component';
import {ToDoComponent} from './components/to-do/to-do.component';
import {CandidateTableComponent} from './components/candidate-table/candidate-table.component';
import {CandidatesService} from './services/candidates.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CurrencyComponent} from './components/currency/currency.component';
import {CurrencyService} from './services/currency.service';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        CandidatesComponent,
        ToDoComponent,
        CandidateTableComponent,
        CurrencyComponent,
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        NgProgressModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        HttpClientModule,
        NgProgressRouterModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    ],
    bootstrap: [AppComponent],
    providers: [CandidatesService, CurrencyService]
})
export class AppModule {
}
