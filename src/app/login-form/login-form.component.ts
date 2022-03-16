import { Component } from '@angular/core';
import { UserService } from "../user.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
  }



}
