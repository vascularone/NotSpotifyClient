import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
  ngOnInit() {
  }
}
