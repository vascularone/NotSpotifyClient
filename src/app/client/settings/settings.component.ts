import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserEdit } from 'src/app/core/models/user-edit.dto';
import { User } from 'src/app/core/models/user.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private apiRequest: ApiRequestService) { }
  user: User = new User();
  userEdit: UserEdit = new UserEdit();
  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser()
  {
    try {
      this.apiRequest.getUserById(1).subscribe(res => {
        this.user = res.data;
      })
    } catch(error)
    {
      console.error(error);
    }
  }

  editUser(id: number, user: UserEdit)
  {
    try {
      this.apiRequest.editUser(id, user).subscribe(res => {
        console.log(res.data);
        this.getCurrentUser();
      });
      this.userEdit = new UserEdit();
    } catch (error)
    {
      console.error(error);
    }
  }

}
