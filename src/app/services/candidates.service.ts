import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../models/candidate.model';
import {Observable} from 'rxjs';

@Injectable()
export class CandidatesService {

    public apiUrl = 'https://recruiter-yanchik.firebaseio.com/';

    constructor(private http: HttpClient) {
    }

    addCandidate(candidate: Candidate): Observable<any> {
        return this.http.post(`${this.apiUrl}candidates.json`, candidate);
    }

    getCandidates(): Observable<any> {
        return this.http.get(`${this.apiUrl}candidates.json`);
    }
}
