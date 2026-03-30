import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Recruiter Layout Components
import { RecruiterMainLayoutComponent } from './core/layout/recruiter-main-layout/recruiter-main-layout.component';
import { RecruiterNavbarTopComponent } from './core/layout/recruiter-components/recruiter-navbar-top/recruiter-navbar-top.component';
import { RecruiterNavbarBottomComponent } from './core/layout/recruiter-components/recruiter-navbar-bottom/recruiter-navbar-bottom.component';
import { RecruiterLeftSidebarComponent } from './core/layout/recruiter-components/recruiter-left-sidebar/recruiter-left-sidebar.component';
import { SharedModule } from './core/shared/shared.module'; // Import SharedModule for shared components
// Candidate Layout Components
import { CandidateNavbarTopComponent } from './core/layout/candidate-components/candidate-navbar-top/candidate-navbar-top.component';
import { CandidateNavbarBottomComponent } from './core/layout/candidate-components/candidate-navbar-bottom/candidate-navbar-bottom.component';
import { CandidateLeftSidebarComponent } from './core/layout/candidate-components/candidate-left-sidebar/candidate-left-sidebar.component';
// Feature Components
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';

// Shared/Sub-components
import { PersonalDetailsSectionComponent } from './features/candidate-application/components/personal-details-section/personal-details-section.component';
// import { EmploymentScreeningSectionComponent } from './features/candidate-application/components/employment-screening-section/employment-screening-section.component';
// import { ResumeUploadSectionComponent } from './features/candidate-application/components/resume-upload-section/resume-upload-section.component';
import { ReferralSectionComponent } from './features/candidate-application/components/referral-section/referral-section.component';
import { DiversitySectionComponent } from './features/candidate-application/components/diversity-section/diversity-section.component';
// import { PageHeaderComponent } from './features/candidate-application/components/page-header/page-header.component';
import { RecruiterDashboardComponent } from './features/recruiter-dashboard/recruiter-dashboard.component';
import { CreateJobComponent } from './features/recruiter-create-job/recruiter-create-job.component';
import { RecruiterAdvancedSearchComponent } from './features/recruiter-advanced-search/recruiter-advanced-search.component';
import { SignupPageComponent } from './features/auth/pages/signup-page/signup-page.component';
import { RecruiterPipelineComponent } from './features/recruiter-pipeline/recruiter-pipeline.component';
import { RecruiterInterviewsComponent } from './features/recruiter-interviews/recruiter-interviews.component';
import { RecruiterFeedbackComponent } from './features/recruiter-feedback/recruiter-feedback.component';
import { CandidateMainLayoutComponent } from './core/layout/candidate-main-layout/candidate-main-layout.component';
import {  CandidateResponsibilitiesComponent } from './features/candidate-career-profile/candidate-responsibilities/candidate-responsibilities.component';
import { CandidateSkillsComponent } from './features/candidate-career-profile/candidate-skills/candidate-skills.component';
import { CandidateEmploymentRecordsComponent } from './features/candidate-career-profile/candidate-employment-records/candidate-employment-records.component';
import { CandidateEducationComponent } from './features/candidate-career-profile/candidate-education/candidate-education.component';
import { CandidateProjectsComponent } from './features/candidate-career-profile/candidate-projects/candidate-projects.component';
// import { CandidateCareerProfileComponent } from './features/candidate-career-profile/candidate-career-profile.component';
import { MainLayoutComponent } from './features/candidate-career-profile/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
// import { CandidatePersonlDetailsComponent } from './core/features/candidate-career-profile/candidate-personl-details/candidate-personl-details.component';
@NgModule({
  declarations: [
    AppComponent,
    RecruiterMainLayoutComponent,
    RecruiterNavbarTopComponent,
    RecruiterNavbarBottomComponent,
    RecruiterLeftSidebarComponent,
    CandidateFormPageComponent,
    LoginPageComponent,
    RecruiterViewCandidateComponent,
    ReportPageComponent,
    PersonalDetailsSectionComponent,
    ReferralSectionComponent,
    DiversitySectionComponent,
    RecruiterDashboardComponent,
    CreateJobComponent,
    RecruiterAdvancedSearchComponent,
    SignupPageComponent,
    RecruiterPipelineComponent,
    RecruiterInterviewsComponent,
    RecruiterFeedbackComponent,
    CandidateDashboardComponent,
    CandidateMainLayoutComponent,
    CandidateNavbarTopComponent,
    CandidateNavbarBottomComponent,
    CandidateLeftSidebarComponent,
    CandidateResponsibilitiesComponent,
    CandidateSkillsComponent,
    CandidateEmploymentRecordsComponent,
    CandidateEducationComponent,
    CandidateProjectsComponent,
    MainLayoutComponent,
    // CandidatePersonlDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // This links the navigation GPS to the app
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    DragDropModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {} // Name fixed to be the root module
