import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormPageComponent } from './features/candidate-application/pages/candidate-form-page/candidate-form-page.component';
import { RecruiterViewCandidateComponent } from './features/recruiter-view-candidates/pages/recruiter-view-candidate/recruiter-view-candidate.component';
const routes: Routes = [
  { path: '', redirectTo: 'candidate/apply', pathMatch: 'full' },
  { path: 'candidate/apply', component: CandidateFormPageComponent },
  {path : '',redirectTo : 'recruiter/view-candidate',pathMatch:'full'},
  {path : 'recruiter/view-candidate',component : RecruiterViewCandidateComponent},
  {path : 'recruiter',component : RecruiterViewCandidateComponent},
  {path : 'candidate',component : CandidateFormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
