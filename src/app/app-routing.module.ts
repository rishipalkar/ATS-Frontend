import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout & Features
import { RecruiterMainLayoutComponent } from './core/layout/recruiter-main-layout/recruiter-main-layout.component';
import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';
import { RecruiterDashboardComponent } from './features/recruiter-dashboard/recruiter-dashboard.component';
import { CreateJobComponent } from './features/recruiter-create-job/recruiter-create-job.component';
import { RecruiterAdvancedSearchComponent } from './features/recruiter-advanced-search/recruiter-advanced-search.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { SignupPageComponent } from './features/auth/pages/signup-page/signup-page.component';
import { RecruiterPipelineComponent } from './features/recruiter-pipeline/recruiter-pipeline.component';
import { RecruiterInterviewsComponent } from './features/recruiter-interviews/recruiter-interviews.component';
import { RecruiterFeedbackComponent } from './features/recruiter-feedback/recruiter-feedback.component';
import { CandidateMainLayoutComponent } from './core/layout/candidate-main-layout/candidate-main-layout.component';
import { CandidateResponsibilitiesComponent } from './features/candidate-career-profile/candidate-responsibilities/candidate-responsibilities.component';
import { CandidateProjectsComponent } from './features/candidate-career-profile/candidate-projects/candidate-projects.component';
import { CandidateEducationComponent } from './features/candidate-career-profile/candidate-education/candidate-education.component';
import { CandidateEmploymentRecordsComponent } from './features/candidate-career-profile/candidate-employment-records/candidate-employment-records.component';
import { CandidateSkillsComponent } from './features/candidate-career-profile/candidate-skills/candidate-skills.component';
import { MainLayoutComponent } from './features/candidate-career-profile/main-layout/main-layout.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },

  {
    path: '',
    component: RecruiterMainLayoutComponent,
    children: [
      {
        path: 'view-candidate',
        component: RecruiterViewCandidateComponent,
      },
      { path: 'report', component: ReportPageComponent },
      { path: 'dashboard', component: RecruiterDashboardComponent },
      { path: 'create-job', component: CreateJobComponent },
      { path: 'pipeline', component: RecruiterPipelineComponent },
      { path: 'interviews', component: RecruiterInterviewsComponent },
      { path: 'feedback', component: RecruiterFeedbackComponent },
      {
        path: 'advanced-search',
        component: RecruiterAdvancedSearchComponent,
      },
    ],
  },

  // Candidate Layout Wrapper
  {
    // GRANDPARENT: The Global Layout (Has the dark left sidebar)
    path: 'candidate',
    component: CandidateMainLayoutComponent, // Whatever your main app layout is named
    children: [
      // Auto-redirect /candidate to the dashboard or profile
      { path: '', redirectTo: 'career-profile', pathMatch: 'full' },
      { path: 'dashboard', component: CandidateDashboardComponent },
      // PARENT: The Career Profile Layout (Has the right-side progress bar)
      {
        path: 'career-profile',
        component: MainLayoutComponent,
        children: [
          // CHILDREN: The actual forms
          // Default to responsibilities
          {path: 'profile', component: CandidateFormPageComponent},
          { path: '', redirectTo: 'responsibilities', pathMatch: 'full' },
          {
            path: 'responsibilities',
            component: CandidateResponsibilitiesComponent,
          },
          { path: 'skills', component: CandidateSkillsComponent },
          {
            path: 'employment-records',
            component: CandidateEmploymentRecordsComponent,
          },
          { path: 'education', component: CandidateEducationComponent },
          { path: 'projects', component: CandidateProjectsComponent },
        ],
      },

      // OTHER GRANDPARENT CHILDREN: (Pages that only have the dark sidebar, no right sidebar)
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'applications', component: MyApplicationsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} // Name fixed to match routing role
