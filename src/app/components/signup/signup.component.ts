import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { User } from 'src/app/user.mode';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email: string;
  userName: string;
  password: string;
  phone: number;

  constructor(private userData: UsersDataService) {}

  ngOnInit(): void {}

  getUserDetails() {
    this.userData.pushUserData({
      email: this.email,
      password: this.password,
      phone: this.phone,
      username: this.userName,
    });
  }
}
