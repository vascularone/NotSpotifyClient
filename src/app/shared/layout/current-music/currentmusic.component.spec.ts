import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiRequestService } from 'src/app/core/services/api-requests/ApiRequest.service';
import { of } from 'rxjs';
import { ResponseDTO } from 'src/app/core/models/response.dto';
import { Playlist } from 'src/app/core/models/playlist.dto';
import { CurrentmusicComponent } from './currentmusic.component';
import { SongDTO } from 'src/app/core/models/song.dto';

describe('CurrentmusicComponent', () => {
  let component: CurrentmusicComponent;
  let fixture: ComponentFixture<CurrentmusicComponent>;
  let apiRequestService: jasmine.SpyObj<ApiRequestService>;

  beforeEach(async(() => {
    const apiRequestSpy = jasmine.createSpyObj('ApiRequestService', ['getCurrentSong']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CurrentmusicComponent],
      providers: [{ provide: ApiRequestService, useValue: apiRequestSpy }]
    }).compileComponents();

    apiRequestService = TestBed.inject(ApiRequestService) as jasmine.SpyObj<ApiRequestService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentmusicComponent);
    component = fixture.componentInstance;
  });

  it('should get currentSong and set the currentSong accordingly', () => {
    const mockPlaylist: ResponseDTO<SongDTO> = {
      data: { id: 1, name: 'Ultraviolence', artist: 'Lana del rey', linkRef: 'someLink'},
      error: null,
      status: 200
    };
    apiRequestService.getCurrentSong.and.returnValue(of(mockPlaylist));

    component.ngOnInit();

    expect(apiRequestService.getCurrentSong).toHaveBeenCalled();
    expect(component.song).toEqual(mockPlaylist.data);
  });
});
