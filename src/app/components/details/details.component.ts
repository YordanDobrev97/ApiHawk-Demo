import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  user: any
  id: number;
  userService: UserService;

  constructor(route: ActivatedRoute, userService: UserService) {
    this.userService = userService;
    this.id = Number(route.snapshot.paramMap.get("id")) || 0;
  }

  ngOnInit(): void {
    this.fetchUser()
  }

  fetchUser() {
    this.userService.getById(this.id).subscribe((currentUser) => {
      this.user = currentUser;
    })
  }

}
