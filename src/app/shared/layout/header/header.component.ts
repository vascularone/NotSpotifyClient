import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "";
  constructor(private router: Router, private apiRequest: ApiRequestService) { }

  ngOnInit() {
    try {
      this.apiRequest.getUserById(1).subscribe(res => {
        this.name = res.data.username;
      })
    } catch(error)
    {
      console.error(error);
    }
  }

  navigateToInitial()
  {
    this.router.navigate(['client/client-initial']);
  }

}
