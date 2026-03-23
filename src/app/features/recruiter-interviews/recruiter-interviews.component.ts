import { Component, OnInit } from '@angular/core';

interface Interview {
  id: number;
  candidateName: string;
  candidateEmail: string;
  jobRole: string;
  jobDescription: string;
  dateTime: Date;
  location: 'Google Meet' | 'Microsoft Teams' | 'Office - Conference Room A';
  meetLink?: string;
  status: 'Scheduled' | 'Completed' | 'Canceled';
}

@Component({
  selector: 'app-recruiter-interviews',
  templateUrl: './recruiter-interviews.component.html',
  styleUrls: ['./recruiter-interviews.component.scss']
})
export class RecruiterInterviewsComponent implements OnInit {
  isModalOpen = false;
  selectedInterview: Interview | null = null;
  
  // Simulated State for API feedback
  isGeneratingLink = false;
  isSending = false;

  interviews: Interview[] = [
    {
      id: 1, candidateName: 'Michael Chen', candidateEmail: 'mchen.dev@email.com',
      jobRole: 'Product Designer', 
      jobDescription: 'Senior role focused on end-to-end user experience and prototyping.',
      dateTime: new Date('2026-03-25T10:00:00'), location: 'Google Meet',
      status: 'Scheduled'
    },
    {
      id: 2, candidateName: 'Sarah Jenkins', candidateEmail: 'sjenkins.ux@email.com',
      jobRole: 'Senior Frontend Engineer', 
      jobDescription: 'Leading frontend architecture with React and Next.js.',
      dateTime: new Date('2026-03-25T14:30:00'), location: 'Office - Conference Room A',
      status: 'Scheduled'
    },
    {
      id: 3, candidateName: 'David Kim', candidateEmail: 'dkim.dev@email.com',
      jobRole: 'DevOps Engineer', 
      jobDescription: 'Managing cloud infrastructure, CI/CD pipelines, and Kubernetes.',
      dateTime: new Date('2026-03-26T11:00:00'), location: 'Google Meet',
      status: 'Scheduled',
      meetLink: 'https://meet.google.com/abc-defg-hij'
    }
  ];

  constructor() { }
  ngOnInit(): void { }

  // Modal Controls
  openDetail(interview: Interview) {
    this.selectedInterview = { ...interview }; // Copy to avoid direct mutation
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedInterview = null;
  }

  // Action Simulations
  generateMeetLink() {
    if (!this.selectedInterview) return;
    this.isGeneratingLink = true;
    
    setTimeout(() => {
      // Mock generated link
      this.selectedInterview!.meetLink = `https://meet.google.com/mock-${this.selectedInterview?.id}-${Date.now().toString().slice(-4)}`;
      this.isGeneratingLink = false;
    }, 1500);
  }

  sendToCandidate() {
    if (!this.selectedInterview || !this.selectedInterview.meetLink) return;
    this.isSending = true;

    setTimeout(() => {
      console.log(`Email sent to ${this.selectedInterview?.candidateEmail} with link: ${this.selectedInterview?.meetLink}`);
      this.isSending = false;
      alert(`Meeting details sent to ${this.selectedInterview?.candidateName}`);
      this.closeModal();
    }, 1800);
  }
}