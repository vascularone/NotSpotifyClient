import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/core/models/playlist.dto';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  userId: number = 1;
  constructor(private apiRequest: ApiRequestService, private router: Router) { }
  playlists: Playlist[] = [];
  songs: SongDTO[] = [];
  playlistSongs: SongDTO[] = [];
  playlist : Playlist = new Playlist();

  ngOnInit() {
    this.getPlaylistByUserId();
  }

  getPlaylistByUserId()
  {
    this.apiRequest.getPlaylistByUserId(this.userId).subscribe(res => {
      this.playlists = res.data;
    })
  }
  getSongsByPlaylistId(id: number)
  {
    this.apiRequest.getSongsByPlaylistId(id).subscribe(res => {
      this.playlistSongs = res.data;
      console.log(res.data);
    })
  }
  createPlaylist(tempPlaylist: Playlist)
  {
    this.apiRequest.createPlaylist(tempPlaylist).subscribe((res) => {
      this.playlist = res.data;
      console.log("playlist created");
    })
  }

}
