import { Component } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent {
  candidate: any = {
    name: 'Aastha Shah',
    overallScore: 45.1,

    // Skills
    skillFit: 45.3,
    skillsFound: '6.4/13',

    // Experience
    experienceFit: 0.0,
    totalExperience: 0.67,
    careerAverageScore: 50,

    // Education
    educationScore: 100,

    // Quality
    grammarScore: 16.5,
    brokenLinks: 0,

    // Job Title
    jobTitleMatch: "No exact match for 'Full Stack Developer' found.",

     noticePeriod: 45,
      relocation: true,

    // Certificates
    certCount: 0,
    certVerified: 0,
    certExpired: 0,

    // AI Summary
    aiSummary: `The candidate, Aastha Shah, is a strong fit for the Full Stack Developer role...`,
  };

  constructor() {
    const navData = history.state?.data;

    if (navData && Object.keys(navData).length > 0) {
      this.candidate = { ...this.candidate, ...navData };
    }
  }
}
