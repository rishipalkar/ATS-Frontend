import { Component } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent {
  showResume :boolean= false;
  candidate: any = {
    name: 'Aastha Shah',
    overallScore: 69.1,

    // Skills
    skillFit: 45.3,
    skillsFound: '6/13',

    // Experience
    experienceFit: 67,
    totalExperience: 0.67,
    careerAverageScore: 0.83 + " years",

    // Education
    educationScore: 100,

    // Quality
    grammarErrorRate: 16.5,
    brokenLinks: 0,

    // Job Title
    jobTitleMatch: "exact match for 'Full Stack Developer' found!",

     noticePeriod: 45,
      relocation: true,

    // Certificates
    certCount: 2,
    certVerified: 2,
    certExpired: 1,

    // AI Summary
    aiSummary: `The candidate, Aastha Shah, is a strong fit for the Full Stack Developer role with an overall score of 45.1. They have a skill fit of 45.3, having found 6 out of 13 required skills. Their experience fit is 67, with a total experience of 0.67 years and a career average score of 0.83. The candidate has a perfect education score of 100. However, they have a grammar error rate of 16.5% and no broken links in their resume. There is no exact match for the job title 'Full Stack Developer' in their profile. The candidate has a notice period of 45 days and is open to relocation. They hold 2 certificates, all of which are verified, but one has expired. Overall, Aastha Shah shows potential but may need to improve certain areas to be a stronger fit for the role.`,
  };
  
  constructor() {
    const navData = history.state?.data;

    if (navData && Object.keys(navData).length > 0) {
      this.candidate = { ...this.candidate, ...navData };
    }
  }
  togglePreview() {
    this.showResume = !this.showResume;
  }
}
