import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { items } from '../items';
import { GetDataService } from '../get-data.service'
import { MatSidenav } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { interval } from 'rxjs';
import { defaultColors } from 'ng2-charts';
import { WeatherData } from '../measurements';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent implements OnInit {
  isOpen = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  
  installation: {};
  installationMeta: {};
  constructor(
    private showData: GetDataService,
  ) {
    
    }


  ngOnInit() {
    this.showConfig();
    const refreshInterval=interval(1000*3600);
    refreshInterval.subscribe(x=> {
        this.showConfig();
    });
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.isOpen = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.isOpen = true;
    }
  }



  showConfig() {
    this.showData.getMetaDataById()
      .forEach(value1 => { 
          this.installationMeta = value1;
      });   
      
      this.showData.getDataById()
      .forEach( (value2: WeatherData) => {
        this.installation=value2;
        console.log(this.installation);
  
      });

      
    }



}
