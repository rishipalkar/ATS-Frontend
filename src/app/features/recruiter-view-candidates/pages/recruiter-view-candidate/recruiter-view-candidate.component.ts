import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Candidate {
  name: string;
  role: string;
  skills: string[];
  roleApplied: string;
  status: 'Completed' | 'Pending';
  atsScore?: number;
  selected?: boolean;
}

@Component({
  selector: 'app-recruiter-view-candidate',
  templateUrl: './recruiter-view-candidate.component.html',
  styleUrls: ['./recruiter-view-candidate.component.scss']
})
export class RecruiterViewCandidateComponent {
  constructor(private router: Router) {}

  // UI State
  isJDModalOpen = false;
  searchText = '';
  currentPage = 1;
  pageSize = 5;

  candidates: Candidate[] = [
    { name: 'Penelope Garcia', roleApplied: 'Junior Frontend Developer', role: 'Frontend Dev', skills: ['React', 'TypeScript'], status: 'Completed', atsScore: 78 },
    { name: 'Quinn Rodriguez', roleApplied: 'UI Engineer', role: 'Frontend Dev', skills: ['Node.js', 'Figma'], status: 'Pending' },
    { name: 'Riley Lopez', roleApplied: 'React Specialist', role: 'Frontend Dev', skills: ['AWS', 'SQL'], status: 'Completed', atsScore: 65 },
    { name: 'Sophia Anderson', roleApplied: 'Senior Frontend Dev', role: 'Frontend Dev', skills: ['Docker', 'TypeScript'], status: 'Completed', atsScore: 82 },
    { name: 'Thomas Moore', roleApplied: 'Frontend Architect', role: 'Frontend Dev', skills: ['GraphQL', 'Apollo'], status: 'Pending' },
    { name: 'Alice Smith', roleApplied: 'Lead Frontend Developer', role: 'Frontend Dev', skills: ['Kubernetes', 'Next.js'], status: 'Completed', atsScore: 90 },
    { name: 'Bob Brown', roleApplied: 'Junior Web Developer', role: 'Frontend Dev', skills: ['Spring', 'Java'], status: 'Pending' },
    { name: 'Charlie Davis', roleApplied: 'Angular Developer', role: 'Frontend Dev', skills: ['Angular', 'RxJS'], status: 'Pending' },
    { name: 'Diana Prince', roleApplied: 'Product Engineer', role: 'Frontend Dev', skills: ['Vue', 'Vite'], status: 'Completed', atsScore: 95 },
    { name: 'Ethan Hunt', roleApplied: 'Software Engineer', role: 'Frontend Dev', skills: ['Python', 'Django'], status: 'Pending' }
  ];

  // Logic: Filter -> Paginate
  get filteredCandidates() {
    return this.candidates.filter(c => 
      c.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.roleApplied.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get paginatedCandidates() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredCandidates.slice(start, start + this.pageSize);
  }

  // Modals & Actions
  openJDModal() { this.isJDModalOpen = true; }
  closeJDModal() { this.isJDModalOpen = false; }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.paginatedCandidates.forEach(c => { if (c.status !== 'Completed') c.selected = isChecked; });
  }

  onScan(candidate?: Candidate) {
    alert(`Initiating Scan for: ${candidate ? candidate.name : 'Selected Candidates'}`);
  }

  viewReport(candidate: Candidate) {
    this.router.navigate(['/report'], { state: { data: candidate } });
  }

  // Pagination
  nextPage() { if ((this.currentPage * this.pageSize) < this.filteredCandidates.length) this.currentPage++; }
  prevPage() { if (this.currentPage > 1) this.currentPage--; }
}