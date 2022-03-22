import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    page_up () {
    document.documentElement.scrollTop = 0;
  }


  constructor() {

   }

  ngOnInit(): void {
  }

}
