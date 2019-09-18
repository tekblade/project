import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-p-style',
  templateUrl: './p-style.component.html',
  styleUrls: ['./p-style.component.css']
})
export class PStyleComponent implements OnInit {
 installation={};
 value;
 color;
  @Input() help;
  constructor(public service: GetDataService) { }

  ngOnInit() {
       this.service.getDataById().subscribe(val => {
          this.installation=val.current;
          let obj=JSON.parse(JSON.stringify(this.installation));
          for(let i=0;i< obj.values.length;i++){
            if(JSON.stringify(obj.values[i].name)===JSON.stringify(this.help)){
              this.value=obj.values[i].value
            }
          }
          if(JSON.stringify(this.help)===JSON.stringify("PM1")|| JSON.stringify(this.help)===JSON.stringify("PM25")|| JSON.stringify(this.help)===JSON.stringify("PM10") )
            this.color=obj.indexes[0].color;
          else
            this.color="black";
        });
      
  }

}
