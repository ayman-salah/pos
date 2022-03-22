import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss']
})
export class MynavComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }


      //=================== control show or hidder sidebar
// methos does >> show side bar when click button
side_status = 1 ;
show_side_bar(){
  var sidebar =  document.getElementsByClassName('sidebar');
  var content =  document.getElementsByClassName('content');
  var icon_bar = document.getElementsByClassName('open');
 if(this.side_status == 0){
   sidebar[0].classList.add('show')
   sidebar[0].classList.remove('hidden')
   content[0].classList.add('show')
   content[0].classList.remove('hidden')
   this.side_status = 1;
   icon_bar[0].classList.toggle('rotate');
}
else{
 sidebar[0].classList.add('hidden')
 sidebar[0].classList.remove('show');
 content[0].classList.add('hidden')
 content[0].classList.remove('show');
 this.side_status = 0 ;
 icon_bar[0].classList.toggle('rotate');
}



}



}
