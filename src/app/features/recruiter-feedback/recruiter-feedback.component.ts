import { Component, OnInit } from '@angular/core';

interface CandidateFeedback {
  id: number;
  name: string;
  role: string;
  currentStage: string;
  avatar: string;
  experience: string;
  location: string;
  degree: string;
  joinedSince: string;
  summary: string;
}

@Component({
  selector: 'app-recruiter-feedback',
  templateUrl: './recruiter-feedback.component.html',
  styleUrls: ['./recruiter-feedback.component.scss']
})
export class RecruiterFeedbackComponent implements OnInit {
  isModalOpen = false;
  viewMode: 'profile' | 'feedback' = 'profile';
  selectedCandidate: CandidateFeedback | null = null;
  
  // Filter & Form States
  selectedStage: string = 'All Stages';
  rating: number = 0;
  strengths: string = '';
  recommendation: string = '';

  allCandidates: CandidateFeedback[] = [
    { 
      id: 1, name: 'Michael Chen', role: 'Product Designer', currentStage: 'Interview Round 1', avatar: 'M',
      experience: '5 Yrs', location: 'San Francisco', degree: 'BFA Design', joinedSince: '12 Jan 2026',
      summary: 'Expert in visual systems and interactive prototyping for mobile platforms.'
    },
    { 
      id: 2, name: 'Elena Rodriguez', role: 'Backend Developer', currentStage: 'Interview Round 3', avatar: 'E',
      experience: '4 Yrs', location: 'Remote', degree: 'M.S. CS', joinedSince: '15 Jan 2026',
      summary: 'Focused on distributed systems, Go, and high-concurrency API architectures.'
    }
  ];

  filteredCandidates: CandidateFeedback[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterCandidates();
  }

  filterCandidates() {
    if (this.selectedStage === 'All Stages') {
      this.filteredCandidates = [...this.allCandidates];
    } else {
      this.filteredCandidates = this.allCandidates.filter(c => c.currentStage === this.selectedStage);
    }
  }

  openModal(candidate: CandidateFeedback, mode: 'profile' | 'feedback') {
    this.selectedCandidate = candidate;
    this.viewMode = mode;
    this.isModalOpen = true;
    if (mode === 'feedback') this.resetForm();
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCandidate = null;
  }

  resetForm() {
    this.rating = 0;
    this.strengths = '';
    this.recommendation = '';
  }

  submitFeedback() {
    console.log('Evaluation saved for:', this.selectedCandidate?.name);
    this.closeModal();
  }
}