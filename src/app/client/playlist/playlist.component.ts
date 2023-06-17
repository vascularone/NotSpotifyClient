import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/core/models/playlist.dto';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';
import { CurrentMusicService } from 'src/app/core/services/api-requests/CurrentMusic.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  userId: number = 1;
  constructor(private apiRequest: ApiRequestService, private router: Router, private currentMusicService: CurrentMusicService) { }
  playlists: Playlist[] = [];
  songs: SongDTO[] = [];
  playlistSongs: SongDTO[] = [];
  playlist : Playlist = new Playlist();
  createPlaylistVisibility: boolean = false;
  openPlaylistVisibility: boolean = false;
  ngOnInit() {
    this.getPlaylistByUserId();
  }

  openPlaylistDialog()
  {
    this.openPlaylistVisibility = !this.openPlaylistVisibility
  }
  createPlaylistDialog()
  {
    this.createPlaylistVisibility = !this.createPlaylistVisibility;
  }

  getPlaylistByUserId()
  {
    try
    {
      this.apiRequest.getPlaylistByUserId(this.userId).subscribe(res => {
        this.playlists = res.data;
      })
    } catch(error)
    {
      console.error(error);
    }
  }
  getSongsByPlaylistId(id: number)
  {
    try {
      this.apiRequest.getSongsByPlaylistId(id).subscribe(res => {
        this.playlistSongs = res.data;
        console.log(res.data);
      })
    } catch(error)
    {
      console.error(error);
    }
  }
  createPlaylist()
  {
    try {
      this.apiRequest.createPlaylist(this.userId, this.playlist).subscribe((res) => {
        console.log("playlist created");
        this.getPlaylistByUserId();
      })

    } catch( error)
    {
      console.error(error);
    }
  }
  setCurrentSong(song: SongDTO)
  {
    this.apiRequest.setCurrentSong(song).subscribe(() => {
      this.currentMusicService.setCurrentSong(song);
    });
  }

}
