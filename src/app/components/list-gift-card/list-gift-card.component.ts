import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GeneralServicesService } from 'src/app/services/general-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { interface_gift_card } from 'src/app/intefaces/gift_card';
//=========== end imports


@Component({
  selector: 'app-list-gift-card',
  templateUrl: './list-gift-card.component.html',
  styleUrls: ['./list-gift-card.component.scss']
})
export class ListGiftCardComponent implements AfterViewInit {
  value = ''; // this variable is used to show clear-button in input search field
  @ViewChild(MatPaginator) paginator: MatPaginator; // this viewchild for matpaginator
  @ViewChild(MatSort) sort: MatSort; // this viewchild for matsort
  ngAfterViewInit() {} // this function required for class 'AfterViewInit'
  displayedColumns: string[] = ['cardid','card_no','value','balance','created_by','expiry','actions'];
  dataSource: any; // variable of data table
  // this method for fitter data in table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } // >> end method of filter
  subscribe: Subscription = new Subscription();
  constructor(
    public generalService: GeneralServicesService,
    paginator: MatPaginator,
    sort: MatSort
  ) {
    this.paginator = paginator;
    this.sort = sort;
  }
  // stores = this.generalService.my_sores;
  stores: any;

  ngOnInit(): void {
    this.subscribe = this.generalService.get_gift_card().subscribe((data) => {
      this.dataSource = new MatTableDataSource<interface_gift_card>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
   // custome method >> show message when click on _ btn-operation
   custome_message(){
    alert('لتفعيل هذه الميزة يجب شراء الموقع')
  }

}
