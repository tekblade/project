import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { GetDataService } from '../get-data.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { resolve } from 'url';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  someData;
  mainData;
  
  history=new Array();
  @Input() name: string;
  public lineChartData: ChartDataSets[] = [
    { data: [] },

  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    private data: GetDataService,
  ) { 


  }


  ngOnInit() {
    this.mainData=this.data.getDataById();
    let obj;
    this.mainData.subscribe(resp => {
      this.history.push(resp.history);
      obj=JSON.parse(JSON.stringify(this.history[0]));
      for(let i=0;i<obj.length;i++)
        this.lineChartLabels.push(new Date(obj[i].tillDateTime).getHours().toString());    
      /////////////////////////////////////////////////
      for(let i=0;i<obj.length;i++){
        for(let j=0;j<obj[i].values.length;j++){
          if(JSON.stringify(obj[i].values[j].name)===JSON.stringify(this.name))
          this.lineChartData[0].data.push(JSON.parse(obj[i].values[j].value));
        }
      }
      
    }); 
    

}
  
  

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
