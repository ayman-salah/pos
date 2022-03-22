import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AddStoresComponent } from './components/add-stores/add-stores.component';
import { MynavComponent } from './layouts/mynav/mynav.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SalesComponent } from './components/sales/sales.component';
import { AddSalesComponent } from './components/add-sales/add-sales.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { AddPurchasesComponent } from './components/add-purchases/add-purchases.component';
const routes: Routes = [

  {path:'' , component: DashboardComponent},
  {path:'stores' , component: StoresComponent},
  {path:'addstores' , component: AddStoresComponent},
  {path:'pos' , component: PosComponent},
  {path:'listProducts' , component: ListProductsComponent},
  {path:'addproduct' , component: AddProductComponent},
  {path:'listcategory' , component: ListCategoryComponent},
  {path:'addcategory' , component: AddCategoryComponent},
  {path:'listGiftCard' , component: ListGiftCardComponent},
  {path:'addGiftCard' , component: AddGiftCardComponent},
  {path:'listusers' , component: ListUsersComponent},
  {path:'adduser' , component: AddUserComponent},
  {path:'listcustomers' , component: ListCustomersComponent},
  {path:'addcustomer' , component: AddCustomerComponent},
  {path:'listsuppliers' , component: ListSuppliersComponent},
  {path:'addsupplier' , component: AddSupplierComponent},
  {path:'login' , component: LoginComponent},
  {path:'register' , component: RegisterComponent},
  {path:'listsales' , component: SalesComponent},
  {path:'addsale' , component: AddSalesComponent},
  {path:'listpurchases' , component: PurchasesComponent},
  {path:'addpurchase' , component: AddPurchasesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
