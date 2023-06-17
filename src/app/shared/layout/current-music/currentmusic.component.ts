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
  progressWidth: string;
  constructor(private apiService: ApiRequestService, private currentMusicService: CurrentMusicService) { }

  ngOnInit() {
    this.getCurrentSong();
    setInterval(() => {
      this.updateProgressBar();
    }, 1000);
  }

  getSongById(id:number) {
    this.apiService.getSongById(id).subscribe(res => {
      this.song = res.data;
    })
  }

  stopMusic()
  {
    this.currentMusicService.stopCurrentSong();
  }
  continueMusic()
  {
    this.currentMusicService.continueCurrentSong();
  }
  updateProgressBar(): void {
    const progress = this.currentMusicService.getCurrentTime() / this.currentMusicService.getDuration();
    this.progressWidth = `${progress * 100}%`;
  }
  
  getCurrentSong()
  {
    this.apiService.getCurrentSong().subscribe(res => {
      this.currentMusicService.getCurrentSong().subscribe(p => {
        if (p != null)
        this.song = p;
        else
        this.song = res.data;

        console.log(this.song.audioLink);
      });
    })
  }
}
