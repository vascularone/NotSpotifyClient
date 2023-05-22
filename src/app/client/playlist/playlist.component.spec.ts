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
    const apiRequestSpy = jasmine.createSpyObj('ApiRequestService', ['getPlaylistByUserId', 'getSongsByPlaylistId', 'createPlaylist']);

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
          name: 'My Playlist',
          description: 'no descripto',
          linkRef: 'someLink?'
        },
        {
          id: 2,
          name: 'Your Playlist',
          description: 'no descripto',
          linkRef: 'someLink?'
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
   it('should retrieve songs by playlist ID', () => {
    const playlistId = 9;
    const mockSongs: ResponseDTO<SongDTO[]> = {
      data : [
        {
          id: 1,
          name: 'this song',
          artist: 'me',
          linkRef: 'aLink',
        }
      ],
      error:null,
      status:200,
    }

    apiRequestService.getSongsByPlaylistId.and.returnValue(of(mockSongs));

    component.getSongsByPlaylistId(playlistId);

    expect(component.playlistSongs).toEqual(mockSongs.data);
  });

  it('should return null if there are no songs linked to the playlist', () => {
    const playlistId = 9;
    const mockSongs: ResponseDTO<SongDTO[]> = {
      data: null,
      error:null,
      status:200,
    }

    apiRequestService.getSongsByPlaylistId.and.returnValue(of(mockSongs));

    component.getSongsByPlaylistId(playlistId);

    expect(component.playlistSongs).toBeNull();
  });

  it('should create a playlist ', () => {
     const mockPlaylist: ResponseDTO<Playlist> = {

        data: {
          id: 1,
          name: 'My Playlist',
          description: 'no descripto',
          linkRef: 'someLink?'
        },
        error: null,
        status: 200
    };

    apiRequestService.createPlaylist.and.returnValue(of(mockPlaylist));

    component.createPlaylist(mockPlaylist.data);

    expect(component.playlist).toEqual(mockPlaylist.data);
  });

  it('should not create a playlist if no inputs are given', () => {
    const mockPlaylist: ResponseDTO<Playlist> = {

      data: null,
      error: null,
      status: 200
  };

  apiRequestService.createPlaylist.and.returnValue(of(mockPlaylist));

  component.createPlaylist(mockPlaylist.data);

  expect(component.playlist).toBeNull();
  });
});
