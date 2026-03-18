import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Candidate {
  name: string;
  role: string;
  experience: number;
  skills: string[];
  status: 'Completed' | 'Pending'; // Strict types help
  atsScore?: number;
  selected?: boolean; // For checkboxes
}

@Component({
  selector: 'app-recruiter-view-candidate',
  templateUrl: './recruiter-view-candidate.component.html',
  styleUrls: ['./recruiter-view-candidate.component.scss']
})
export class RecruiterViewCandidateComponent {
  constructor(private router: Router) {}

  isJDModalOpen = false;
  selectedRange = 5;
  currentPage = 1;
  pageSize = 5;

  candidates: Candidate[] = [
    { name: 'Penelope Garcia', role: 'Frontend Dev', experience: 2, skills: ['React'], status: 'Completed', atsScore: 78 },
    { name: 'Quinn Rodriguez', role: 'Frontend Dev', experience: 3, skills: ['Node'], status: 'Pending' },
    { name: 'Riley Lopez', role: 'Frontend Dev', experience: 4, skills: ['AWS'], status: 'Completed', atsScore: 65 },
    { name: 'Sophia Anderson', role: 'Frontend Dev', experience: 5, skills: ['Docker'], status: 'Completed', atsScore: 82 },
    { name: 'Thomas Moore', role: 'Frontend Dev', experience: 6, skills: ['GraphQL'], status: 'Pending' },
    { name: 'Alice Smith', role: 'Frontend Dev', experience: 7, skills: ['Kubernetes'], status: 'Completed', atsScore: 90 },
    { name: 'Bob Brown', role: 'Frontend Dev', experience: 1, skills: ['Spring'], status: 'Pending' },
    { name: 'Charlie Davis', role: 'Frontend Dev', experience: 4, skills: ['Angular'], status: 'Pending' },
    { name: 'Diana Prince', role: 'Frontend Dev', experience: 8, skills: ['Vue'], status: 'Completed', atsScore: 95 },
    { name: 'Ethan Hunt', role: 'Frontend Dev', experience: 5, skills: ['Python'], status: 'Pending' },
    { name: 'Fiona Gallagher', role: 'Frontend Dev', experience: 2, skills: ['Sass'], status: 'Pending' },
    { name: 'George Miller', role: 'Frontend Dev', experience: 3, skills: ['Next.js'], status: 'Completed', atsScore: 71 }
  ];

  get paginatedCandidates() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.candidates.slice(start, start + this.pageSize);
  }

  // Checkbox Logic: Ignore completed ones for bulk selection
  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.paginatedCandidates.forEach(c => {
      if (c.status !== 'Completed') {
        c.selected = isChecked;
      }
    });
  }

  onScan(candidate?: Candidate) {
    const name = candidate ? candidate.name : `selected items`;
    alert(`Initiating Scan for: ${name}`);
  }

  viewReport(candidate: Candidate) {
    this.router.navigate(['/report'], { state: { data: candidate } });
  }

  // Pagination
  nextPage() { if ((this.currentPage * this.pageSize) < this.candidates.length) this.currentPage++; }
  prevPage() { if (this.currentPage > 1) this.currentPage--; }
}