import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent {
  jobs = [
    {
      role: 'Frontend Developer',
      description: 'Design and implement UI components for a modern ATS platform.',
      experience: '0-2 Years',
      type: 'Full-time',
      skills: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      role: 'UI Engineer Intern',
      description: 'Work closely with UX designers to build interactive prototypes.',
      experience: 'Fresher',
      type: 'Internship',
      skills: ['React', 'Figma', 'Tailwind']
    }
  ];
}