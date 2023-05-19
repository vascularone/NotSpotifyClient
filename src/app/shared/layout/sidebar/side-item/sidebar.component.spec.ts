import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from '../sidebar.component';
import { SidebarItem } from 'src/app/core/models/sidebar-item.model';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule], // Add the SharedModule to imports
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();
  });

  it('should update the selected state based on the current URL', () => {
    component.sidebarItems = [
      {
        name: 'Home',
        icon: 'fa-home',
        route: '/client/client-initial',
        selected: false,
      },
      {
        name: 'Playlists',
        icon: 'fa-phone',
        route: '/client/playlist',
        selected: false,
      },
      {
        name: 'Library',
        icon: 'fa-file',
        route: '/client/library',
        selected: false,
      },
    ];

    // Create a spy object for the url property
    const urlSpy = spyOnProperty(router, 'url', 'get');

    // Simulate current URL '/client/playlist'
    urlSpy.and.returnValue('/client/playlist');
    component.updateSelectedState();
    expect(component.sidebarItems[1].selected).toBe(true);
    expect(component.sidebarItems[0].selected).toBe(false);
    expect(component.sidebarItems[2].selected).toBe(false);

    // Simulate current URL '/client/library'
    urlSpy.and.returnValue('/client/library');
    component.updateSelectedState();
    expect(component.sidebarItems[2].selected).toBe(true);
    expect(component.sidebarItems[0].selected).toBe(false);
    expect(component.sidebarItems[1].selected).toBe(false);
  });

  // Remaining test cases...

});
