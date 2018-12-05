import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Candidate} from '../../models/candidate.model';
import {CandidatesService} from '../../services/candidates.service';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
    form: FormGroup;

    public candidates: Candidate[] = [];

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
            ])
        });

        this.onGetCandidates().subscribe((candidates) => {
            this.candidates = candidates;
        });

    }

    onSubmit() {
        const {name, salary, percent} = this.form.value;

        let revenue = 0;
        let firstRevenue = 0;
        let secondRevenue = 0;

        if (percent === '10') {
            revenue = salary * 0.10;
            firstRevenue = revenue * 0.10;
            secondRevenue = revenue * 0.40;
        } else if (percent === '16') {
            revenue = salary * 0.16;
            firstRevenue = revenue * 0.10;
            secondRevenue = revenue * 0.40;
        } else if (percent === '18') {
            revenue = salary * 0.18;
            firstRevenue = revenue * 0.10;
            secondRevenue = revenue * 0.40;
        } else if (percent === '20') {
            revenue = salary * 0.20;
            firstRevenue = revenue * 0.10;
            secondRevenue = revenue * 0.40;
        }

        const candidate = new Candidate(name, salary, percent, revenue, firstRevenue, secondRevenue);

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
        return this.candidatesService.getCandidates().pipe(
            map((candidates) => {
                return Object.keys(candidates).map((item) => ({
                        ...candidates[item],
                    })
                );
            })
        );
    }
}
