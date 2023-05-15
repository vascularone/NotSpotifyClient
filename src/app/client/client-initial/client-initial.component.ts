import { Component, OnInit } from '@angular/core';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-client-shared',
  templateUrl: './client-initial.component.html',
  styleUrls: ['./client-initial.component.css']
})
export class ClientInitialComponent implements OnInit {

  constructor(private apiService: ApiRequestService) { }

  ngOnInit() {
  }

}
