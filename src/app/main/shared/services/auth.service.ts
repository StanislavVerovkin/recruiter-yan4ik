import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    loginWithEmailAndPassword(user: User): Observable<any> {
        return this.http.post(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCA1-Rbrdy9eHoxTRPzIuPyPDUVDr6uiRI',
            user
        );
    }
}
