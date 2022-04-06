import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  @Input()  link : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  custome_message(){
    alert('لتفعيل هذه الميزة يجب شراء الموقع');
  }
}
