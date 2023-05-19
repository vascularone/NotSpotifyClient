import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ClientInitialComponent } from './client-initial.component';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';
import { CurrentMusicService } from 'src/app/core/services/api-requests/CurrentMusic.service';
import { of } from 'rxjs';
import { SongDTO } from 'src/app/core/models/song.dto';
import { ResponseDTO } from 'src/app/core/models/response.dto';

describe('ClientInitialComponent', () => {
  let component: ClientInitialComponent;
  let fixture: ComponentFixture<ClientInitialComponent>;
  let apiRequestService: jasmine.SpyObj<ApiRequestService>;
  let currentMusicService: jasmine.SpyObj<CurrentMusicService>;

  beforeEach(() => {
    const apiRequestSpy = jasmine.createSpyObj('ApiRequestService', ['firstMethod', 'setCurrentSong']);
    const currentMusicSpy = jasmine.createSpyObj('CurrentMusicService', ['setCurrentSong']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ClientInitialComponent],
      providers: [
        { provide: ApiRequestService, useValue: apiRequestSpy },
        { provide: CurrentMusicService, useValue: currentMusicSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInitialComponent);
    component = fixture.componentInstance;
    apiRequestService = TestBed.inject(ApiRequestService) as jasmine.SpyObj<ApiRequestService>;
    currentMusicService = TestBed.inject(CurrentMusicService) as jasmine.SpyObj<CurrentMusicService>;
  });

  it('should call firstMethod and set the songs property', () => {
    const mockResponse: ResponseDTO<SongDTO[]> = {
      data: [{ id: 1, name: 'Song 1', artist: 'Lana Del Rey', linkRef: 'someLink' }, { id: 2, name: 'Song 2', artist: 'Rinor', linkRef: 'anotherLink'}],
      error: null,
      status: 200,
    };
    apiRequestService.firstMethod.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(apiRequestService.firstMethod).toHaveBeenCalled();
    expect(component.songs).toEqual(mockResponse.data);
  });

  it('should call setCurrentSong and setCurrentSong method of CurrentMusicService', () => {
    const song: SongDTO = { id: 1, name: 'Song 1', artist: 'Lana Del Rey', linkRef: 'someLink' };
    apiRequestService.setCurrentSong.and.returnValue(of(null));

    component.setCurrentSong(song);

    expect(apiRequestService.setCurrentSong).toHaveBeenCalledWith(song);
    expect(currentMusicService.setCurrentSong).toHaveBeenCalledWith(song);
  });
});
