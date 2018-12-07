import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CandidatesService} from './main/shared/services/candidates.service';
import {CurrencyService} from './main/shared/services/currency.service';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AuthModule,
        HttpClientModule,
        AppRoutingModule,
        MainModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
    providers: [CandidatesService, CurrencyService]
})
export class AppModule {
}
