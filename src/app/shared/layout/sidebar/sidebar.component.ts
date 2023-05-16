import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SidebarItem } from 'src/app/core/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItems: Array<SidebarItem> = [];
  isAdmin: boolean = false;
  isClient: boolean = true;
  roles: boolean;
  items: MenuItem[] = [
    {
      label: 'Log Out',
      icon: 'pi pi-fw pi-sign-out',
      command: () => this.signOut(),
    },
  ];
  private signOut(): void {
    this.router.navigate(['agent/thankyou']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.setSidebarItems();
  }
  setSidebarItems(): void {
    this.sidebarItems = [];
    if (this.isAdmin == true) {
      this.sidebarItems.push({
        name: 'Users',
        icon: 'fa-user-group',
        route: '/admin/dashboard',
        selected: false,
      });
    }
    if (this.isClient == true) {
      this.sidebarItems.push({
        name: 'Playlists',
        icon: 'fa-phone',
        route: '/admin/dashboard',
        selected: false,
      });

      this.sidebarItems.push({
        name: 'Library',
        icon: 'fa-file',
        route: '/client/client-initial',
        selected: false,
      });

      this.sidebarItems.push({
        name: 'Settings',
        icon: 'fa-calendar-days',
        route: '/admin/dashboard',
        selected: false,
      });
    }
    this.updateSelectedState();
  }
  updateSelectedState(): void {
    const currentUrl = this.router.url;

    this.sidebarItems.forEach((item) => {
      if (item.route === currentUrl) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
  onItemSelect(event: SidebarItem): void {
    this.sidebarItems.forEach((item) => {
      item.selected = event.name === item.name;
    });
    // this.sidebarVisible = !this.sidebarVisible;
  }

}
