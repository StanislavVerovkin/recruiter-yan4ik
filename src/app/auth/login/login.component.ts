import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../main/shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(null, [
                Validators.required
            ])
        });
    }

    onSubmit() {
        const userWithEmailAndPassword = this.form.value;

        this.authService.loginWithEmailAndPassword(userWithEmailAndPassword)
            .subscribe((data) => {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['/main', 'candidates']);
            });
    }
}
