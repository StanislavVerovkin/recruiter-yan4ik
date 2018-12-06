import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyService {

    constructor(private http: HttpClient) {
    }

    getCurrency(): Observable<any> {
        return this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    }
}
