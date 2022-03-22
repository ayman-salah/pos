import { Component, OnInit } from '@angular/core';
import { GeneralServicesService } from 'src/app/services/general-services.service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  constructor(public data : GeneralServicesService) { }

  products = this.data.my_products

  message(){
    alert('سوف يتم إضافة المنتج')
  }
  ngOnInit(): void {
  }

}
