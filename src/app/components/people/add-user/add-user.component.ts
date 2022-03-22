import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit   {

  constructor() { }

  ngOnInit(): void {
  }
  save(f: NgForm){
    alert('added successfully')
    f.reset();
  }

}

