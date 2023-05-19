import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SideItemComponent } from './side-item.component';
import { SidebarItem } from 'src/app/core/models/sidebar-item.model';

describe('SideItemComponent', () => {
  let component: SideItemComponent;
  let fixture: ComponentFixture<SideItemComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SideItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to the route of the sidebar item', () => {
    const sidebarItem: SidebarItem = { name: 'Example', icon: 'example-icon', route: '/example'};
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateTo(sidebarItem);

    expect(navigateSpy).toHaveBeenCalledWith([sidebarItem.route]);
  });

  // Add more tests as needed
});
