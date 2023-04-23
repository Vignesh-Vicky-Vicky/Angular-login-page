import { Injectable, OnInit } from '@angular/core';
import { User } from '../user.mode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService implements OnInit {
  userData: User[] = [
    {
      username: 'admin',
      password: 'admin',
      phone: 123,
      email: 'admin@admin.com',
    },
  ];

  currentUser: User;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pushUserData(user: User) {
    this.userData.push(user);
    this.router.navigate(['/']);
  }

  validateUser(user: { userName: string; password: string }) {
    this.userData.map((item) => {
      if (item.username === user.userName && item.password === user.password) {
        this.currentUser = item;
        this.router.navigate(['dashboard']);
      }
    });
  }
}
