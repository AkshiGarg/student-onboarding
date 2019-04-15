import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();
  // @Input() username: string;
  loginForm: FormGroup;
  hide = true;
  valid = true;
  constructor(private _fb: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.get('username').value === 'AdminUser'
      && this.loginForm.get('password').value === 'qwerty') {
      const username = this.loginForm.get('username').value;
      this.loginEvent.emit(username);
      // this.route.navigate(['/onboarding']);
    } else {
      this.valid = false;
    }
  }
}
