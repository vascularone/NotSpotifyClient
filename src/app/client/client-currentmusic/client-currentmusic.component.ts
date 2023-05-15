import { Component, OnInit } from '@angular/core';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-client-currentmusic',
  templateUrl: './client-currentmusic.component.html',
  styleUrls: ['./client-currentmusic.component.css']
})
export class ClientCurrentmusicComponent implements OnInit {

  songs: SongDTO[] = [];
  constructor(private apiService: ApiRequestService) { }

  ngOnInit() {
    this.apiService.firstMethod().subscribe(res =>
      {
        this.songs = res.data;
        console.log(res.data);
      });
  }

}
