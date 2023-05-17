import { Component, OnInit } from '@angular/core';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';
import { CurrentMusicService } from 'src/app/core/services/api-requests/CurrentMusic.service';

@Component({
  selector: 'app-currentmusic',
  templateUrl: './currentmusic.component.html',
  styleUrls: ['./currentmusic.component.css']
})
export class CurrentmusicComponent implements OnInit {

  song: SongDTO = new SongDTO();
  songs: SongDTO[] = [];
  constructor(private apiService: ApiRequestService, private currentMusicService: CurrentMusicService) { }

  ngOnInit() {
    this.apiService.getCurrentSong().subscribe(res => {
      this.song = res.data;
      console.log(res.data);
    })
    this.getCurrentSong();
  }

  getSongById(id:number) {
    this.apiService.getSongById(id).subscribe(res => {
      this.song = res.data;
      // console.log(this.song);
    })
  }
  getCurrentSong()
  {
    this.apiService.getCurrentSong().subscribe(res => {
      this.currentMusicService.getCurrentSong().subscribe(song => {
        this.song = song;
      });
    })
  }

}
