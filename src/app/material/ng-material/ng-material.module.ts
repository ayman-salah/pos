import { NgModule } from '@angular/core';
//========= import materials api
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
// import {  ReactiveFormsModule } from '@angular/forms';
const materials  = [
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatIconModule,
  FormsModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatTreeModule,
  MatCardModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,


]
const providers = [
  MatPaginator,
  MatSort,
]



@NgModule({
  declarations: [
  ],
  imports: [materials],
  providers: [providers],
  exports:[materials]

})
export class NgMaterialModule { }
