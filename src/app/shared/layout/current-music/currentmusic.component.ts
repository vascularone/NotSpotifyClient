import { Component, OnInit } from '@angular/core';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-currentmusic',
  templateUrl: './currentmusic.component.html',
  styleUrls: ['./currentmusic.component.css']
})
export class CurrentmusicComponent implements OnInit {

  song: SongDTO = new SongDTO();
  songs: SongDTO[] = [];
  constructor(private apiService: ApiRequestService) { }

  ngOnInit() {
    this.apiService.firstMethod().subscribe(res =>
      {
        this.songs = res.data;
        console.log(res.data);
      });
      this.getSongById(2123);
  }

  getSongById(id:number) {
    this.apiService.getSongById(id).subscribe(res => {
      this.song = res.data;
      console.log(this.song);
    })
  }

}
