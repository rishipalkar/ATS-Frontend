import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import the Routing Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Layout Components
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { NavbarTopComponent } from './core/layout/components/navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './core/layout/components/navbar-bottom/navbar-bottom.component';
import { LeftSidebarComponent } from './core/layout/components/left-sidebar/left-sidebar.component';
import { SharedModule } from './core/shared/shared.module'; // Import SharedModule for shared components
// Feature Components
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { CandidateLoginPageComponent } from './features/candidate-application/pages/candidate-login-page/candidate-login-page.component';
import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';

// Shared/Sub-components
import { PersonalDetailsSectionComponent } from './features/candidate-application/components/personal-details-section/personal-details-section.component';
import { EmploymentScreeningSectionComponent } from './features/candidate-application/components/employment-screening-section/employment-screening-section.component';
import { ResumeUploadSectionComponent } from './features/candidate-application/components/resume-upload-section/resume-upload-section.component';
import { ReferralSectionComponent } from './features/candidate-application/components/referral-section/referral-section.component';
import { DiversitySectionComponent } from './features/candidate-application/components/diversity-section/diversity-section.component';
import { PageHeaderComponent } from './features/candidate-application/components/page-header/page-header.component';
import { RecruiterDashboardComponent } from './features/recruiter-dashboard/recruiter-dashboard.component';
import { CreateJobComponent } from './features/recruiter-create-job/recruiter-create-job.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    LeftSidebarComponent,
    CandidateFormPageComponent,
    CandidateLoginPageComponent,
    CandidateDashboardComponent,
    RecruiterViewCandidateComponent,
    ReportPageComponent,
    PersonalDetailsSectionComponent,
    EmploymentScreeningSectionComponent,
    ResumeUploadSectionComponent,
    ReferralSectionComponent,
    DiversitySectionComponent,
    PageHeaderComponent,
    RecruiterDashboardComponent,
    CreateJobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // This links the navigation GPS to the app
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Name fixed to be the root module