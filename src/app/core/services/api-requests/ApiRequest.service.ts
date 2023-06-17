import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SongDTO } from '../../models/song.dto';
import { ResponseDTO } from '../../models/response.dto';
import { Playlist } from '../../models/playlist.dto';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(
    private http: HttpClient,
  ) {}

  getAllSongs() : Observable<ResponseDTO<SongDTO[]>>
  {
    try{
      var url = environment.apiURL + '/api/Songs/GetAllSongs';
      return this.http.get<ResponseDTO<SongDTO[]>>(url);
    } catch(error)
    {
      console.error(error);
      return null;
    }
  }
  getSongById(id:number): Observable<ResponseDTO<SongDTO>>
  {
    try {
      var url = environment.apiURL + '/api/Songs/GetSongById?id=' + id;
      return this.http.get<ResponseDTO<SongDTO>>(url);
    } catch(error)
    {
      console.error(error);
      return null;
    }
  }

  setCurrentSong(song: SongDTO) : any
  {
    try {
      var url = environment.apiURL + '/api/Songs/SetCurrentSong';
      return this.http.post<any>(url, song);
    } catch(error)
    {
      console.error(error);
      return null;
    }
  }

  getCurrentSong() : Observable<ResponseDTO<SongDTO>>
  {
    try {
      var url = environment.apiURL + '/api/Songs/GetCurrentSong';
      return this.http.get<ResponseDTO<SongDTO>>(url);
    } catch(error)
    {
      console.error(error);
      return null;
    }
  }

  getPlaylistByUserId(userId: number) : Observable<ResponseDTO<Playlist[]>>
  {
    try {
      var url = environment.apiURL + '/api/Playlist/GetPlaylistsByUserId?userId=' + userId;
      return this.http.get<ResponseDTO<Playlist[]>>(url);
    } catch (error)
    {
      console.error(error);
      return null;
    }
  }
  getSongsByPlaylistId(id: number) : Observable<ResponseDTO<SongDTO[]>>
  {
    try{
      var url = environment.apiURL + '/api/Playlist/GetSongsByPlaylistId?id=' + id;
      return this.http.get<ResponseDTO<SongDTO[]>>(url);
    } catch (error)
    {
      console.error(error);
      return null;
    }
  }
  createPlaylist(userId: number, playlist: Playlist) : Observable<ResponseDTO<Playlist>>
  {
    try {
      var url = environment.apiURL + `/api/Playlist/CreatePlaylist/${userId}`;
      return this.http.post<ResponseDTO<Playlist>>(url, playlist);
    } catch(error)
    {
      console.error(error);
      return null;
    }
  }

  // getUserById(userId: numbeR) : Observable<ResponseDTO<User>>
  // {

  // }
}
