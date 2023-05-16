import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  items: MenuItem[] = [
    { label: 'Log Out', icon: 'pi pi-fw pi-sign-out', command: () => this.signOut() },
  ];
  @Input() name: string;

  constructor(private router: Router) { }

  private signOut(): void {
    this.router.navigate(["client/signout"]);
  }
  ngOnInit() {
  }
}
