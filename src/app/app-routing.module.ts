import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
// import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
import { ReportPageComponent } from './features/recruiter-view-candidates/pages/report-page/report-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'candidate/apply', pathMatch: 'full' },
  { path: 'candidate/apply', component: CandidateFormPageComponent },
  {path : '',redirectTo : 'recruiter/view-candidate',pathMatch:'full'},
  {path : 'recruiter/view-candidate',component : RecruiterViewCandidateComponent},
  {path : 'recruiter',component : RecruiterViewCandidateComponent},
  {path : 'candidate',component : CandidateFormPageComponent},
  {path : 'recruiter/report',component : ReportPageComponent},
  {path : 'report',component : ReportPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
