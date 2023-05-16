import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-client-shared',
  templateUrl: './client-initial.component.html',
  styleUrls: ['./client-initial.component.css']
})
export class ClientInitialComponent implements OnInit {

  songs: SongDTO[] = [];
  constructor(private apiService: ApiRequestService, private router: Router) { }

  ngOnInit() {
    this.apiService.firstMethod().subscribe(res =>
      {
        this.songs = res.data;
        console.log(res.data);
      });
  }
  sayHello()
  {
    this.router.navigate(['admin/dashboard']);
  }

}
