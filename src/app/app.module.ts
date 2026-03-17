import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { PersonalDetailsSectionComponent } from './features/candidate-application/components/personal-details-section/personal-details-section.component';
import { EmploymentScreeningSectionComponent } from './features/candidate-application/components/employment-screening-section/employment-screening-section.component';
import { ResumeUploadSectionComponent } from './features/candidate-application/components/resume-upload-section/resume-upload-section.component';
import { ReferralSectionComponent } from './features/candidate-application/components/referral-section/referral-section.component';
import { DiversitySectionComponent } from './features/candidate-application/components/diversity-section/diversity-section.component';
import { PageHeaderComponent } from './core/shared/components/page-header/page-header.component';

import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormPageComponent,
    PersonalDetailsSectionComponent,
    EmploymentScreeningSectionComponent,
    ResumeUploadSectionComponent,
    ReferralSectionComponent,
    DiversitySectionComponent,
    PageHeaderComponent, 
    RecruiterViewCandidateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
