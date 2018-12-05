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

    const candidate = new Candidate(name, salary, percent);

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
