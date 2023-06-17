import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SongDTO } from 'src/app/core/models/song.dto';

@Injectable({
  providedIn: 'root'
})
export class CurrentMusicService {
  private currentSongSubject: BehaviorSubject<SongDTO> = new BehaviorSubject<SongDTO>(null);
  private currentAudio: HTMLAudioElement;
  private playbackPosition: number = 0;

  setCurrentSong(song: SongDTO): void {
    this.stopCurrentSong();
    this.currentSongSubject.next(song);
    this.playCurrentSong(song.audioLink);
  }

  getCurrentSong(): Observable<SongDTO> {
    return this.currentSongSubject.asObservable();
  }

  public stopCurrentSong(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.playbackPosition = this.currentAudio.currentTime;
    }
  }

  public continueCurrentSong(): void {
    if (this.currentAudio) {
      if (this.currentAudio.paused) {
        this.currentAudio.play();
      }
    }
  }

  public getDuration(): number {
    if (this.currentAudio) {
      return this.currentAudio.duration;
    }
    return 0;
  }

  public getCurrentTime(): number {
    if (this.currentAudio) {
      return this.currentAudio.currentTime;
    }
    return 0;
  }
  public getProgressWidth(): string {
    if (this.currentAudio && this.currentAudio.duration) {
      const progressPercentage = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
      return progressPercentage + '%';
    }
    return '0%';
  }
  

  private playCurrentSong(audioLink: string): void {
    this.currentAudio = new Audio(audioLink);
    this.currentAudio.play();
    this.currentAudio.addEventListener('ended', () => {
      console.log("Audio playback ended");
    });
  }

  
}
