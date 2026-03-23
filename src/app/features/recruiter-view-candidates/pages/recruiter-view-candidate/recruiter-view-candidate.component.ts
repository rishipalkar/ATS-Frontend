import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-view-candidate',
  templateUrl: './recruiter-view-candidate.component.html',
  styleUrls: ['./recruiter-view-candidate.component.scss'],
})
export class RecruiterViewCandidateComponent implements OnInit {
  // Pagination State
  currentPage: number = 1;
  pageSize: number = 5;
  totalCandidates: number = 0;
  Math = Math;
  selectedCandidate: any = null;
  isModalOpen: boolean = false;

  // Selection State
  allSelected: boolean = false;
  selectedJob: string = 'Frontend Developer - Pune';

  // Full Data Set
  allCandidates = [
    {
      id: 1,
      name: 'Hrishikesh M.',
      role: 'Senior Angular Dev',
      joinedSince: '12 Jan 2026',
      experience: '3.5 Yrs',
      location: 'Pune',
      degree: 'B.Tech CS',
      isShortlisted: false,
      isScanned: true,
      matchScore: 94,
      status: 'pending',
      summary:
        'Expert in building scalable enterprise frontend architectures with a focus on RxJS and performance optimization.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      isOnNotice: true,
    },
    {
      id: 2,
      name: 'Aastha Sharma',
      role: 'UI/UX Designer',
      joinedSince: '05 Feb 2026',
      experience: '2 Yrs',
      location: 'Mumbai',
      degree: 'M.Des',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'Creative designer specializing in user-centric design, high-fidelity wireframing, and interactive prototyping.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      isOnNotice: false,
    },
    {
      id: 3,
      name: 'Rohan Verma',
      role: 'Node.js Engineer',
      joinedSince: '20 Feb 2026',
      experience: '5 Yrs',
      location: 'Remote',
      degree: 'B.E. IT',
      isShortlisted: false,
      isScanned: true,
      matchScore: 78,
      status: 'pending',
      summary:
        'Backend specialist focused on microservices architecture, API security, and real-time data processing.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      isOnNotice: true,
    },
    {
      id: 4,
      name: 'Sanya Iyer',
      role: 'Product Manager',
      joinedSince: '01 Mar 2026',
      experience: '4 Yrs',
      location: 'Bangalore',
      degree: 'MBA',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'Data-driven PM with experience leading cross-functional teams and managing product lifecycles from MVP to launch.',
      skills: ['Agile', 'Product Strategy', 'Jira', 'Stakeholder Management'],
      isOnNotice: false,
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Full Stack Dev',
      joinedSince: '10 Mar 2026',
      experience: '6 Yrs',
      location: 'Pune',
      degree: 'M.Tech',
      isShortlisted: false,
      isScanned: true,
      matchScore: 88,
      status: 'pending',
      summary:
        'Full stack engineer with a strong foundation in MERN stack and cloud-native application development.',
      skills: ['React', 'Node.js', 'Docker', 'GraphQL'],
      isOnNotice: true,
    },
    {
      id: 6,
      name: 'Priya Das',
      role: 'React Developer',
      joinedSince: '12 Mar 2026',
      experience: '3 Yrs',
      location: 'Delhi',
      degree: 'B.Tech',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'Frontend developer passionate about building responsive, accessible, and high-performance user interfaces.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux'],
      isOnNotice: false,
    },
    {
      id: 7,
      name: 'Arjun Mehta',
      role: 'DevOps Engineer',
      joinedSince: '14 Mar 2026',
      experience: '4.5 Yrs',
      location: 'Hyderabad',
      degree: 'B.E.',
      isShortlisted: false,
      isScanned: true,
      matchScore: 82,
      status: 'pending',
      summary:
        'Cloud infrastructure expert specializing in automation, CI/CD pipelines, and Kubernetes orchestration.',
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'AWS'],
      isOnNotice: false,
    },
    {
      id: 8,
      name: 'Neha Kapoor',
      role: 'QA Lead',
      joinedSince: '15 Mar 2026',
      experience: '7 Yrs',
      location: 'Gurgaon',
      degree: 'M.Sc',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'Quality assurance lead with extensive experience in automated testing frameworks and performance testing.',
      skills: ['Selenium', 'Cypress', 'Test Automation', 'JMeter'],
      isOnNotice: true,
    },
    {
      id: 9,
      name: 'Rahul Nair',
      role: 'Cloud Architect',
      joinedSince: '18 Mar 2026',
      experience: '10 Yrs',
      location: 'Remote',
      degree: 'PhD CS',
      isShortlisted: false,
      isScanned: true,
      matchScore: 91,
      status: 'pending',
      summary:
        'Strategic technical leader designing robust, scalable cloud architectures for enterprise-level organizations.',
      skills: ['Azure', 'GCP', 'Solution Architecture', 'Serverless'],
      isOnNotice: false,
    },
    {
      id: 10,
      name: 'Ishani Roy',
      role: 'Graphic Designer',
      joinedSince: '20 Mar 2026',
      experience: '1.5 Yrs',
      location: 'Kolkata',
      degree: 'BFA',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'Visual storyteller specializing in brand identity, layout design, and digital marketing collateral.',
      skills: ['Photoshop', 'Illustrator', 'InDesign', 'Typography'],
      isOnNotice: false,
    },
    {
      id: 11,
      name: 'Karan Johar',
      role: 'Backend Developer',
      joinedSince: '21 Mar 2026',
      experience: '2.5 Yrs',
      location: 'Pune',
      degree: 'B.E. CS',
      isShortlisted: false,
      isScanned: false,
      status: 'pending',
      summary:
        'C# backend developer focused on building secure, maintainable RESTful APIs and database management.',
      skills: ['C#', '.NET Core', 'SQL Server', 'Microservices'],
      isOnNotice: true,
    },
    {
      id: 12,
      name: 'Simran K.',
      role: 'Frontend Developer',
      joinedSince: '22 Mar 2026',
      experience: '3 Yrs',
      location: 'Bangalore',
      degree: 'M.Tech',
      isShortlisted: false,
      isScanned: true,
      matchScore: 85,
      status: 'pending',
      summary:
        'Proficient in modern JavaScript frameworks with a strong eye for UI detail and cross-browser compatibility.',
      skills: ['Vue.js', 'JavaScript', 'Webpack', 'CSS Grid'],
      isOnNotice: false,
    },
  ];

  pagedCandidates: any[] = [];

  ngOnInit(): void {
    this.totalCandidates = this.allCandidates.length;
    this.updatePage();
  }

  // --- Logic for Master Checkbox ---
  // --- Logic for Master Checkbox ---
  toggleAll(event: any) {
    const isChecked = event.target.checked;
    this.allSelected = isChecked;

    // Only toggle candidates on the CURRENT PAGE who are NOT scanned
    this.pagedCandidates.forEach((c) => {
      if (!c.isScanned) {
        c.isShortlisted = isChecked;
      }
    });
  }

  checkSelection() {
    // 1. Get all unscanned candidates on the current page
    const unscannedOnPage = this.pagedCandidates.filter((c) => !c.isScanned);

    // 2. If there are no unscanned candidates, the header checkbox should be unchecked
    if (unscannedOnPage.length === 0) {
      this.allSelected = false;
      return;
    }

    // 3. Header is 'true' only if EVERY unscanned candidate is checked
    this.allSelected = unscannedOnPage.every((c) => c.isShortlisted);
  }

  deselectAll() {
    this.allCandidates.forEach((c) => (c.isShortlisted = false));
    this.allSelected = false;
  }

  // --- Pagination Logic ---
  updatePage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedCandidates = this.allCandidates.slice(startIndex, endIndex);
    this.checkSelection(); // Re-check header checkbox for new page
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.totalCandidates) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }
  openCandidatePopup(candidate: any) {
    this.selectedCandidate = candidate;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCandidate = null;
  }

  triggerScan(candidate: any) {
    candidate.isScanned = true;
    candidate.matchScore = Math.floor(Math.random() * (95 - 70 + 1)) + 70; // Mock score
    candidate.status = 'pending';
    this.closeModal();
  }
  shortlistCandidate(candidate: any) {
    candidate.status = 'shortlisted';
    console.log(`${candidate.name} has been shortlisted.`);
  }

  rejectCandidate(candidate: any) {
    candidate.status = 'rejected';
    console.log(`${candidate.name} has been rejected.`);
  }
}
