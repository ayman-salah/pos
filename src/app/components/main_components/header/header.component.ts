import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // data parameter from parent component
  @Input() tittle1 : string  = '';
  @Input() tittle2 : string = '';
  @Input() tittle3 : string = '';
  @Input() link1 : string = ''
  @Input() link2: string = ''
  @Input() link3: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
