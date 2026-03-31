import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-candidate-calendar',
  templateUrl: './candidate-calendar.component.html',
  styleUrls: ['./candidate-calendar.component.scss']
})
export class CandidateCalendarComponent {
  selectedDate: Date | null = new Date();

  // This sends the date to the Recruiter Dashboard
  @Output() dateSelected = new EventEmitter<Date>();
  
  
  

  constructor() {}

  // THE MISSING LINK:
  // This method is called by (selectedChange) in your HTML
  onDateChange(date: Date | null): void {
    this.selectedDate = date; 
    
    if (date) {
      // This "broadcasts" the new date so the Dashboard can update the Task Card
      this.dateSelected.emit(date);
    }
  }
}