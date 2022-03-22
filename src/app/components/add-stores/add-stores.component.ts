import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.scss']
})
export class AddStoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  save(f: NgForm){
    alert('added successfully')
    f.reset();
  }
}
