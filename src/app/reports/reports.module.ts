import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsersComponent } from './users/users.component';
import { MatListModule } from '@angular/material/list';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [BarChartComponent,UsersComponent, InfoComponent],
  imports: [CommonModule, ChartsModule,MatGridListModule,MatListModule],
})
export class ReportsModule {}
