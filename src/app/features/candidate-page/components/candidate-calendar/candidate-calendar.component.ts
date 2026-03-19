import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-calendar',
  templateUrl: './candidate-calendar.component.html',
  styleUrls: ['./candidate-calendar.component.scss']
})
export class CandidateCalendarComponent {
  selectedDate: Date | null = new Date();
  
  // Highlighted dates for the dashboard
  importantDates = [
    { date: new Date(2026, 2, 25), event: 'Interview with BNY' },
    { date: new Date(2026, 3, 2), event: 'Application Deadline' }
  ];
}