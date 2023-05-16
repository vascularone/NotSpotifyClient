import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from 'src/app/core/models/sidebar-item.model';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.css']
})
export class SideItemComponent implements OnInit {

  @Input() item: SidebarItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(sidebarItem: SidebarItem) {
    this.router.navigate([sidebarItem.route]);
  }

}
