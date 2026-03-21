import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './recruiter-advanced-search.component.html',
  styleUrls: ['./recruiter-advanced-search.component.scss']
})
export class RecruiterAdvancedSearchComponent implements OnInit {
  searchForm: FormGroup;
  results: any[] = [];
  hasSearched: boolean = false;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      role: [''],
      qualification: [''],
      technologies: [''],
      location: [''],
      experience: [''],
      domain: [''],
      responsibility: [''],
      competencies: ['']
    });
  }

  ngOnInit(): void {}

  performAdvancedSearch() {
    this.hasSearched = true;
    // Simulated search results with your specific requirements
    this.results = [
      {
        name: 'Hrishikesh M.',
        role: 'Senior Angular Developer',
        match: 94,
        adequacy: 'Highly Adequate',
        lastChange: '1.5 Years ago',
        noticeDays: '30 Days',
        location: 'Pune',
        skills: ['Angular', 'TypeScript', 'RxJS']
      },
      {
        name: 'Aastha S.',
        role: 'UI/UX Designer',
        match: 88,
        adequacy: 'Adequate',
        lastChange: '2 Years ago',
        noticeDays: '15 Days',
        location: 'Bangalore',
        skills: ['Figma', 'Adobe XD', 'CSS']
      }
    ];
  }
}