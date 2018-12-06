import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Candidate} from '../../models/candidate.model';
import {CandidatesService} from '../../services/candidates.service';
import {finalize, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.css'],
})
export class CandidatesComponent implements OnInit {

    public form: FormGroup;
    public candidates: Candidate[] = [];
    public isLoaded = false;

    constructor(private candidatesService: CandidatesService) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'name': new FormControl(null, [
                Validators.required
            ]),
            'salary': new FormControl(null, [
                Validators.required
            ]),
            'percent': new FormControl(null, [
                Validators.required
            ]),
            'date': new FormControl(null, [
                Validators.required
            ]),
            'currency': new FormControl(null, [
                Validators.required
            ])
        });

        this.onGetCandidates().subscribe((candidates) => {
            this.candidates = candidates;
        });
    }

    onSubmit() {
        const {name, salary, percent, date, currency} = this.form.value;
debugger
        let revenue;
        let firstRevenue;
        let secondRevenue;

        if (percent === '10') {

            revenue = salary * 0.10;
            firstRevenue = revenue * 0.30;
            secondRevenue = revenue * 0.70;

        } else if (percent === '12') {

            revenue = salary * 0.12;
            firstRevenue = revenue * 0.30;
            secondRevenue = revenue * 0.70;

        } else if (percent === '16') {

            revenue = salary * 0.16;
            firstRevenue = revenue * 0.30;
            secondRevenue = revenue * 0.70;

        } else if (percent === '20') {

            revenue = salary * 0.20;
            firstRevenue = revenue * 0.30;
            secondRevenue = revenue * 0.70;

        }

        const candidate = new Candidate(name, salary, percent, revenue, firstRevenue, secondRevenue, date, currency);

        this.candidatesService.addCandidate(candidate)
            .pipe(
                switchMap(() => this.onGetCandidates()
                )
            )
            .subscribe(candidates => {
                this.candidates = candidates;
                this.form.reset();
            });
    }

    onGetCandidates(): Observable<any> {
        this.isLoaded = true;
        return this.candidatesService.getCandidates()
            .pipe(
                map((candidates) => {
                    if (candidates !== null) {
                        return Object.keys(candidates).map((item) => ({
                                ...candidates[item],
                            })
                        );
                    }
                }),
                finalize(() => this.isLoaded = false)
            );
    }
}
