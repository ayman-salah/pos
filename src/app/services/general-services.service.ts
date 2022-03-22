import { Injectable } from '@angular/core';
import  stores from 'src/assets/json/stores.json';
import products from 'src/assets/json/products.json';
import categories from 'src/assets/json/categories.json';
import { HttpClient } from '@angular/common/http';
import { Users } from '../intefaces/users';
import { interface_store } from '../intefaces/store';
import { interface_Customers } from '../intefaces/customers';
import { interface_suppliers } from '../intefaces/suppliers';
import { Observable } from 'rxjs';
import { interface_products } from '../intefaces/products';
import { interface_categories } from '../intefaces/categories';
import { interface_gift_card } from '../intefaces/gift_card';

@Injectable({
  providedIn: 'root',
  useValue: 23
})
export class GeneralServicesService {

  my_sores = stores;
  my_products = products;
  my_cats = categories
  login_status = 'close'



  // this method return data from user.json file
  user_url = 'assets/json/users.json';
  public getusers():Observable<Users[]>{
    return this.http.get<Users[]>(this.user_url)
  }
  // end ... get data of users
 // this method get all stores
 sotre_url = 'assets/json/stores.json'
 public getstores():Observable<interface_store[]>{
   return this.http.get<interface_store[]>(this.sotre_url)
 } //end method of stores && start method of customers
 customer_url = 'assets/json/customers.json';
 public get_customers():Observable<interface_Customers[]>{
  return this.http.get<interface_Customers[]>(this.customer_url)
 }// end method of customers and start method of suppliers
 suppliers_url= 'assets/json/suppliers.json';
 public get_suppliers():Observable<interface_suppliers[]>{
   return this.http.get<interface_suppliers[]>(this.suppliers_url);
 } // end method of suppliers and start method of products
 products_url = 'assets/json/products.json';
 public get_products():Observable<interface_products[]>{
  return  this.http.get<interface_products[]>(this.products_url);
 }
 // end method of products and start method of categories
 categories_url = 'assets/json/categories.json';
 public get_categories():Observable<interface_categories[]>{
  return  this.http.get<interface_categories[]>(this.categories_url);
 }
 // end method of categores and start method of gift-cards
 gift_card_url = 'assets/json/gift_card.json';
 public get_gift_card():Observable<interface_gift_card[]>{
  return  this.http.get<interface_gift_card[]>(this.gift_card_url);
 }
 // end method of gift-card and start method of sales
  sales_url = 'assets/json/sales.json';
  public get_sales():Observable<interface_categories[]>{
    return this.http.get<interface_categories[]>(this.sotre_url)
  }




  constructor(private http:HttpClient) {

  }
}
