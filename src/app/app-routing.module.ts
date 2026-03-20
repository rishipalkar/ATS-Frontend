import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout & Features
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { CandidateLoginPageComponent } from './features/candidate-application/pages/candidate-login-page/candidate-login-page.component';
import { CandidateDashboardComponent } from './features/candidate-page/pages/candidate-dashboard/candidate-dashboard.component';
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';
import { RecruiterDashboardComponent } from './features/recruiter-dashboard/recruiter-dashboard.component';
import { CreateJobComponent } from './features/recruiter-create-job/recruiter-create-job.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: CandidateLoginPageComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'candidate/dashboard', component: CandidateDashboardComponent },
      { path: 'candidate/profile', component: CandidateFormPageComponent },
      { path: 'recruiter/view-candidate', component: RecruiterViewCandidateComponent },
      { path: 'report', component: ReportPageComponent },
      { path: 'recruiter/dashboard', component: RecruiterDashboardComponent },
      {path : 'recruiter/create-job', component: CreateJobComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } // Name fixed to match routing role