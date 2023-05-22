import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaylistComponent } from './playlist.component';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';
import { of } from 'rxjs';
import { ResponseDTO } from 'src/app/core/models/response.dto';
import { Playlist } from 'src/app/core/models/playlist.dto';
import { SongDTO } from 'src/app/core/models/song.dto';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let apiRequestService: jasmine.SpyObj<ApiRequestService>;

  beforeEach(async(() => {
    const apiRequestSpy = jasmine.createSpyObj('ApiRequestService', ['getPlaylistByUserId', 'getSongsByPlaylistId']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlaylistComponent],
      providers: [{ provide: ApiRequestService, useValue: apiRequestSpy }]
    }).compileComponents();

    apiRequestService = TestBed.inject(ApiRequestService) as jasmine.SpyObj<ApiRequestService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
  });

  it('should call getPlaylistByUserId and set the playlist property', () => {
    const mockPlaylist: ResponseDTO<Playlist[]> = {

        data: [
          {
          id: 1,
          name: 'My Playlist'
        },
        {
          id: 2,
          name: 'Your Playlist'
        }
      ],
        error: null,
        status: 200,

    };
    apiRequestService.getPlaylistByUserId.and.returnValue(of(mockPlaylist));

    component.ngOnInit();

    expect(apiRequestService.getPlaylistByUserId).toHaveBeenCalledWith(component.userId);
    expect(component.playlists).toEqual(mockPlaylist.data);
  });
  it('should call getSongsByPlaylistId and get songs from a specific playlist', () => {
   pending();
  });
});
