import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { User } from 'src/app/user.mode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  
  constructor(private user: UsersDataService) {}

  ngOnInit(): void {
    this.currentUser = this.user.currentUser;
  }
}
