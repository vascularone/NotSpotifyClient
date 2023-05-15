import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(
    private http: HttpClient,
  ) {}

  firstMethod() : Observable<any>
  {
    // try{
      var url = environment.apiURL + '/api/Songs/GetSongStringified';
      return this.http.get<any>(url);
    // } catch(error)
    // {
    //   console.error(error);
    //   return <any>null;
    // }
  }
}
