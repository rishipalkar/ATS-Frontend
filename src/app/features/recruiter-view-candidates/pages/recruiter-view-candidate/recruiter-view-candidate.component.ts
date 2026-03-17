import { Component } from '@angular/core';

interface Candidate {
  name: string;
  role: string;
  experience: number;
  skills: string[];
  status: string;
}

@Component({
  selector: 'app-recruiter-view-candidate',
  templateUrl: './recruiter-view-candidate.component.html',
  styleUrls: ['./recruiter-view-candidate.component.scss'],
})
export class RecruiterViewCandidateComponent {
  selectedRange = 5;
  isScanned = false;
  expandedJD = false;

  currentPage = 1;
  pageSize = 5;

  candidates: Candidate[] = [
    {
      name: 'Penelope Garcia',
      role: 'Frontend Developer',
      experience: 2,
      skills: ['React', 'TS', 'Node'],
      status: 'Pending',
    },
    {
      name: 'Yug Inamdar',
      role: 'Frontend Developer',
      experience: 3,
      skills: ['Node', 'Figma'],
      status: 'Pending',
    },
    {
      name: 'Riley Lopez',
      role: 'Frontend Developer',
      experience: 4,
      skills: ['AWS', 'SQL'],
      status: 'Pending',
    },
    {
      name: 'Sophia Anderson',
      role: 'Frontend Developer',
      experience: 5,
      skills: ['Docker', 'TS'],
      status: 'Pending',
    },
    {
      name: 'Thomas Moore',
      role: 'Frontend Developer',
      experience: 6,
      skills: ['GraphQL'],
      status: 'Pending',
    },
    {
      name: 'Aastha Shah',
      role: 'Frontend Developer',
      experience: 7,
      skills: ['Kubernetes'],
      status: 'Pending',
    },
    {
      name: 'Bob Brown',
      role: 'Frontend Developer',
      experience: 1,
      skills: ['Spring'],
      status: 'Pending',
    },
    {
      name: 'Charlie Miller',
      role: 'Frontend Developer',
      experience: 2,
      skills: ['Rust'],
      status: 'Pending',
    },
    {
      name: 'Diana Martinez',
      role: 'Frontend Developer',
      experience: 3,
      skills: ['React'],
      status: 'Pending',
    },
    {
      name: 'Bhargav',
      role: 'Frontend Developer',
      experience: 4,
      skills: ['Python'],
      status: 'Pending',
    },
  ];

  get paginatedCandidates() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.candidates.slice(start, start + this.pageSize);
  }

  isJDModalOpen = false;

  openJDModal() {
    this.isJDModalOpen = true;
  }

  closeJDModal() {
    this.isJDModalOpen = false;
  }
  onScan() {
    this.isScanned = true;

    // Sort by experience (simulate ATS scoring)
    this.candidates.sort((a, b) => b.experience - a.experience);
  }

  isClickable(index: number): boolean {
    return this.isScanned && index < this.selectedRange;
  }

  onCandidateClick(candidate: Candidate, index: number) {
    if (!this.isClickable(index)) return;

    console.log('Selected candidate:', candidate);
    alert(`Viewing ${candidate.name}`);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.candidates.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  toggleJD() {
    this.expandedJD = !this.expandedJD;
  }
}
