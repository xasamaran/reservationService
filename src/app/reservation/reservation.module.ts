import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationHomeComponent } from './reservation-home/reservation-home.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ReservationHomeComponent
  ],
  exports: [
    ReservationHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReservationModule { }
