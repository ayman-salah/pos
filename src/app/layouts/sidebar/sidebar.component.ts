import { Component, OnInit } from '@angular/core';


//====
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  //================== control show the item in list
  link = '';
  list_status = '';
  panelOpenState = false;
  constructor() {}
  open_list(value: string) {
    if (this.list_status != value) {
      this.list_status = value;
    } else {
      this.list_status = '';
    }
  }

  ngOnInit(): void {}
}
