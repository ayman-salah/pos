import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralServicesService } from './services/general-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pos-2';
  login = 'close'
  constructor (public data : GeneralServicesService ){
    this.login =   this.data.login_status
  }



}
