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
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(
    private http: HttpClient,
  ) {}

  firstMethod() : Observable<ResponseDTO<SongDTO[]>>
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
}
