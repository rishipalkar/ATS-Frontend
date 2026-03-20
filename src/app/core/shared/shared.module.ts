import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './components/job-card/job-card.component';
import { CandidateCalendarComponent } from './components/candidate-calendar/candidate-calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    JobCardComponent,
    CandidateCalendarComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    // This makes them available to any module that imports SharedModule
    JobCardComponent,
    CandidateCalendarComponent,
    CommonModule 
  ]
})
export class SharedModule { }