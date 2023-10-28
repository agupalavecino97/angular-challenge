import { Component,  HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data: any[] = [];

  public ngOnInit(): void {
    this.data = DATA;
  }


  public formatDate(val: any) {
      if (val !== 'Select All') {
          return new Intl.DateTimeFormat('en-US').format(val);
      } else {
          return val;
      }
  }

  public formatCurrency(val: string) {
      return parseInt(val, 10).toFixed(2);
  }

  
}
