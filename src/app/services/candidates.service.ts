import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../models/candidate.model';
import {Observable} from 'rxjs';

@Injectable()
export class CandidatesService {

  constructor(private http: HttpClient) {
  }

  addCandidate(candidate: Candidate): Observable<any> {
    return this.http.post('https://recruiter-yan4ik.firebaseio.com/candidates.json', candidate);
  }

  getCandidates(): Observable<any> {
    return this.http.get('https://recruiter-yan4ik.firebaseio.com/candidates.json');
  }
}
