import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsersComponent } from './users/users.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BarChartComponent,
    UsersComponent,
    ViewComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ChartsModule,
    MatGridListModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500 },
    },
  ],
})
export class ReportsModule {}
