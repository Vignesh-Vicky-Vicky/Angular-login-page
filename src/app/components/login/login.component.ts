import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userCreds: {
    userName: string;
    password: string;
  } = {
    userName: '',
    password: '',
  };

  constructor(private userData: UsersDataService) {}

  ngOnInit(): void {}

  validateUser() {
    this.userData.validateUser(this.userCreds);
  }
}
