import { Component, OnInit ,ViewChild  } from '@angular/core';
//============= impodt files of chart js
import { Chart  , registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  constructor(

    ) { }
    ngOnInit() {

      const ctx = document.getElementById('myChart');
      const myChart = new Chart('myChart', {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'ahmed'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3,7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 129, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 156, 64, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    //============= start my chart-2
    const ctx2 = document.getElementById('myChart');
    const myChart2 = new Chart('myChart-2', {
      type: 'polarArea',
    data: {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {}
  });
     //============= start my chart-2
     const ctx3 = document.getElementById('myChart');
     const myChart3 = new Chart('myChart-3', {
       type: 'polarArea',
     data: {
       labels: [
         'Red',
         'Green',
         'Yellow',
         'Grey',
         'Blue'
       ],
       datasets: [{
         label: 'My First Dataset',
         data: [11, 16, 7, 3, 14],
         backgroundColor: [
           'rgb(255, 99, 132)',
           'rgb(75, 192, 192)',
           'rgb(255, 205, 86)',
           'rgb(201, 203, 207)',
           'rgb(54, 162, 235)'
         ]
       }]
     },
     options: {}
   });
  }

}
