//===================
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//==================
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//================== import my components
import { MynavComponent } from './layouts/mynav/mynav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddGiftCardComponent } from './components/add-gift-card/add-gift-card.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListGiftCardComponent } from './components/list-gift-card/list-gift-card.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddCustomerComponent } from './components/people/add-customer/add-customer.component';
import { AddSupplierComponent } from './components/people/add-supplier/add-supplier.component';
import { AddUserComponent } from './components/people/add-user/add-user.component';
import { ListCustomersComponent } from './components/people/list-customers/list-customers.component';
import { ListSuppliersComponent } from './components/people/list-suppliers/list-suppliers.component';
import { ListUsersComponent } from './components/people/list-users/list-users.component';
import { PosComponent } from './components/pos/pos.component';
import { StoresComponent } from './components/stores/stores.component';
import { FooterComponent } from './layouts/footer/footer.component';

import {MatPaginatorModule} from '@angular/material/paginator';

//=================== angular material
import { NgMaterialModule } from './material/ng-material/ng-material.module';
import { GeneralServicesService } from './services/general-services.service';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AddStoresComponent } from './components/add-stores/add-stores.component';
import { SalesComponent } from './components/sales/sales.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { AddPurchasesComponent } from './components/add-purchases/add-purchases.component';
import { AddSalesComponent } from './components/add-sales/add-sales.component';
//==================

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    StoresComponent,
    PosComponent,
    ListProductsComponent,
    AddProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    ListGiftCardComponent,
    AddGiftCardComponent,
    ListUsersComponent,
    AddUserComponent,
    ListCustomersComponent,
    AddCustomerComponent,
    ListSuppliersComponent,
    AddSupplierComponent,
    LoginComponent,
    RegisterComponent,
    AddStoresComponent,
    SalesComponent,
    PurchasesComponent,
    AddPurchasesComponent,
    AddSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    MatPaginatorModule,
    HttpClientModule,

  ],
  providers: [
    GeneralServicesService,
    ],
  bootstrap: [AppComponent],

})
export class AppModule { }
