
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GeneralServicesService } from 'src/app/services/general-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { interface_products } from 'src/app/intefaces/products';
//=========== end imports
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})


export class AddProductComponent implements AfterViewInit {
  value = ''; // this variable is used to show clear-button in input search field
  @ViewChild(MatPaginator) paginator: MatPaginator; // this viewchild for matpaginator
  @ViewChild(MatSort) sort: MatSort; // this viewchild for matsort
  ngAfterViewInit() {} // this function required for class 'AfterViewInit'
  displayedColumns: string[] = ['id','image','name','category','qty','cost','price'];
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
    this.subscribe = this.generalService.get_products().subscribe((data) => {
      this.dataSource = new MatTableDataSource<interface_products>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}

