import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Candidate {
  name: string;
  role: string;
  experience: number;
  skills: string[];
  status: string;
  atsScore?: number;
}

@Component({
  selector: 'app-recruiter-view-candidate',
  templateUrl: './recruiter-view-candidate.component.html',
  styleUrls: ['./recruiter-view-candidate.component.scss']
})
export class RecruiterViewCandidateComponent {

  constructor(private router: Router) {}

  // ✅ JD MODAL
  isJDModalOpen = false;

  openJDModal() {
    this.isJDModalOpen = true;
  }

  closeJDModal() {
    this.isJDModalOpen = false;
  }

  // ✅ RANGE SLIDER
  selectedRange = 5;

  // ✅ PAGINATION
  currentPage = 1;
  pageSize = 5;

  // ✅ DATA
  candidates: Candidate[] = [
    { name: 'Penelope Garcia', role: 'Frontend Dev', experience: 2, skills: ['React'], status: 'Completed', atsScore: 78 },
    { name: 'Quinn Rodriguez', role: 'Frontend Dev', experience: 3, skills: ['Node'], status: 'Pending' },
    { name: 'Riley Lopez', role: 'Frontend Dev', experience: 4, skills: ['AWS'], status: 'Completed', atsScore: 65 },
    { name: 'Sophia Anderson', role: 'Frontend Dev', experience: 5, skills: ['Docker'], status: 'Completed', atsScore: 82 },
    { name: 'Thomas Moore', role: 'Frontend Dev', experience: 6, skills: ['GraphQL'], status: 'Pending' },
    { name: 'Alice Smith', role: 'Frontend Dev', experience: 7, skills: ['Kubernetes'], status: 'Completed', atsScore: 90 },
    { name: 'Bob Brown', role: 'Frontend Dev', experience: 1, skills: ['Spring Boot'], status: 'Pending' }
  ];

  // ✅ PAGINATED LIST
  get paginatedCandidates() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.candidates.slice(start, start + this.pageSize);
  }

  // ✅ CLICK ENABLE BASED ON RANGE
  isClickable(index: number): boolean {
    return index < this.selectedRange;
  }

  // ✅ CLICK HANDLER
  onCandidateClick(candidate: Candidate, index: number) {
    if (!this.isClickable(index)) return;

    if (candidate.status === 'Completed') {
      this.viewReport(candidate);
    }
  }

  // ✅ NAVIGATION
  viewReport(candidate: Candidate) {
    this.router.navigate(['/report'], {
      state: { data: candidate }
    });
  }

  // ✅ SCAN BUTTON
  onScan() {
    alert(`Scanning top ${this.selectedRange} candidates`);
  }

  // ✅ PAGINATION CONTROLS
  nextPage() {
    if ((this.currentPage * this.pageSize) < this.candidates.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}