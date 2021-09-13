import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsersComponent } from './users/users.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [BarChartComponent,UsersComponent,ViewComponent, EditComponent],
  imports: [CommonModule, ChartsModule,MatGridListModule,MatListModule,RouterModule,MatCardModule,MatFormFieldModule],
})
export class ReportsModule {}
