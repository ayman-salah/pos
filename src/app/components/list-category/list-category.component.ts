import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GeneralServicesService } from 'src/app/services/general-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { interface_categories } from 'src/app/intefaces/categories';
//=========== end imports


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements AfterViewInit {
  value = ''; // this variable is used to show clear-button in input search field
  @ViewChild(MatPaginator) paginator: MatPaginator; // this viewchild for matpaginator
  @ViewChild(MatSort) sort: MatSort; // this viewchild for matsort
  ngAfterViewInit() {} // this function required for class 'AfterViewInit'
  displayedColumns: string[] = ['id','cat_name','cat_code','actions'];
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
    this.subscribe = this.generalService.get_categories().subscribe((data) => {
      this.dataSource = new MatTableDataSource<interface_categories>(data);
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
