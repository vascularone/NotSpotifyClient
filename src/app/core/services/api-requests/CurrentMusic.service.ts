import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SongDTO } from 'src/app/core/models/song.dto';

@Injectable({
  providedIn: 'root'
})
export class CurrentMusicService {
  private currentSongSubject: BehaviorSubject<SongDTO> = new BehaviorSubject<SongDTO>(null);

  setCurrentSong(song: SongDTO): void {
    this.currentSongSubject.next(song);
  }

  getCurrentSong(): Observable<SongDTO> {
    return this.currentSongSubject.asObservable();
  }
}
