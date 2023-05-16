import { Component, OnInit } from '@angular/core';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-currentmusic',
  templateUrl: './currentmusic.component.html',
  styleUrls: ['./currentmusic.component.css']
})
export class CurrentmusicComponent implements OnInit {

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
