import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from './core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'NotSpotifyClient';
  constructor( private apiService: ApiRequestService) {}
  ngOnInit()
  {
  }
}
