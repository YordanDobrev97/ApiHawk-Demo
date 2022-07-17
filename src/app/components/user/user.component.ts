import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { IUser } from "../../interfaces";

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'name', 'action'];
    public dataSource: IUser[] = [];
    private allUsers: any = []
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    ngOnInit(): void {
       this.getUsers();
    }

    getUsers() {
       this.userService.getAll().subscribe((data) => {
        const { _embedded } = data;
            const users: IUser[] = _embedded.oauth_users;
            this.dataSource = users;
            this.allUsers = users;
       });
    }

    searchUser(value: string) {
        console.log(value)
        if (!value) {
            this.dataSource = this.allUsers;
        } else {
            const filtered = this.allUsers.filter((u: any) => u.username.includes(value));
            this.dataSource = filtered;
        }
    }
}

