import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';
import {map} from 'rxjs/operators';
import {Currency} from '../../models/currency.model';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    public currency: any;

    constructor(private currencyService: CurrencyService) {
    }

    ngOnInit() {
        this.currencyService.getCurrency().pipe(
            map((results) => results.filter((r: Currency) =>
                r.ccy === 'USD' || r.ccy === 'EUR'
            ))
        )
            .subscribe(data => {
                this.currency = data;
                console.log(this.currency);
            });
    }
}
