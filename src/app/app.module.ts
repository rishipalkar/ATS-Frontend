// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';


// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './core/app.component';
// import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
// import { PersonalDetailsSectionComponent } from './features/candidate-application/components/personal-details-section/personal-details-section.component';
// import { EmploymentScreeningSectionComponent } from './features/candidate-application/components/employment-screening-section/employment-screening-section.component';
// import { ResumeUploadSectionComponent } from './features/candidate-application/components/resume-upload-section/resume-upload-section.component';
// import { ReferralSectionComponent } from './features/candidate-application/components/referral-section/referral-section.component';
// import { DiversitySectionComponent } from './features/candidate-application/components/diversity-section/diversity-section.component';
// import { PageHeaderComponent } from './core/shared/components/page-header/page-header.component';
// import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
// import { RouterModule } from '@angular/router';
// import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';
// import { CandidateLoginPageComponent } from './features/candidate-application/pages/candidate-login-page/candidate-login-page.component';
// // import { CandidateDashboardComponentComponent } from './features/candidate-page/pages/candidate-dashboard-component/candidate-dashboard-component.component';
// import { JobCardComponent } from './features/candidate-page/components/job-card/job-card.component';
// import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
// import { CandidateCalendarComponent } from './features/candidate-page/components/candidate-calendar/candidate-calendar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @NgModule({
//   declarations: [
//     AppComponent,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     CandidateFormPageComponent,
//     PersonalDetailsSectionComponent,
//     EmploymentScreeningSectionComponent,
//     ResumeUploadSectionComponent,
//     ReferralSectionComponent,
//     DiversitySectionComponent,
//     PageHeaderComponent, 
//     RecruiterViewCandidateComponent, ReportPageComponent, CandidateLoginPageComponent, JobCardComponent, CandidateCalendarComponent, CandidateDashboardComponent,
//   ],
//   imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule,RouterModule, BrowserAnimationsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Candidate Application Components
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { PersonalDetailsSectionComponent } from './features/candidate-application/components/personal-details-section/personal-details-section.component';
import { EmploymentScreeningSectionComponent } from './features/candidate-application/components/employment-screening-section/employment-screening-section.component';
import { ResumeUploadSectionComponent } from './features/candidate-application/components/resume-upload-section/resume-upload-section.component';
import { ReferralSectionComponent } from './features/candidate-application/components/referral-section/referral-section.component';
import { DiversitySectionComponent } from './features/candidate-application/components/diversity-section/diversity-section.component';

// Candidate Dashboard Components
import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
import { JobCardComponent } from './features/candidate-page/components/job-card/job-card.component';
import { CandidateCalendarComponent } from './features/candidate-page/components/candidate-calendar/candidate-calendar.component';

// Recruiter Components
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';
import { CandidateLoginPageComponent } from './features/candidate-application/pages/candidate-login-page/candidate-login-page.component';
import { PageHeaderComponent } from './features/candidate-application/components/page-header/page-header.component';

@NgModule({
  declarations: [
    // Components, Directives, and Pipes ONLY
    AppComponent,
    CandidateFormPageComponent,
    PersonalDetailsSectionComponent,
    EmploymentScreeningSectionComponent,
    ResumeUploadSectionComponent,
    ReferralSectionComponent,
    DiversitySectionComponent,
    CandidateDashboardComponent,
    JobCardComponent,
    CandidateCalendarComponent,
    RecruiterViewCandidateComponent,
    ReportPageComponent,
    CandidateLoginPageComponent,
    PageHeaderComponent
  ],
  imports: [
    // Modules ONLY
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }