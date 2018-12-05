import {Component, Input, ViewChild} from '@angular/core';
import {Candidate} from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})

export class CandidateTableComponent {

  @Input()
  public candidates: Candidate[] = [];

  constructor() {

  }

  @ViewChild('myTable') table: any;

  timeout: any;

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
}
