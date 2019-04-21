import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();
  loginForm: FormGroup;
  hide = true;
  valid = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.get('username').value === 'AdminUser'
      && this.loginForm.get('password').value === 'qwerty') {
      const username = this.loginForm.get('username').value;
      this.loginEvent.emit(username);
    } else {
      this.valid = false;
    }
  }
}
