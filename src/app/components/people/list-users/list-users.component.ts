import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/intefaces/users';
//=============

import { GeneralServicesService } from 'src/app/services/general-services.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(){
    // this.dataSource.paginator = this.paginator
  }
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'address',
    'email',
    'group',
    'status',
    'actions',
  ];
  dataSource: any;
  value = '';
  selectedrow:any;
  subscribe: Subscription = new Subscription;
  constructor(
    public generalService: GeneralServicesService,
    paginator: MatPaginator,
    sort: MatSort,

    ) {
      this.paginator = paginator;
      this.sort = sort
    }
  //============= this method does search alive
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //=============


  // end method of excel sheet
  ngOnInit(): void {
    this.subscribe =  this.generalService.getusers().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Users>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(this.dataSource);
    });
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  // this method selects data of row clicked
  onrowclided(row:any){
    this.selectedrow = row;
    console.log(this.selectedrow)
  }

     // custome method >> show message when click on _ btn-operation
     custome_message(){
      alert('لتفعيل هذه الميزة يجب شراء الموقع')
    }
}
