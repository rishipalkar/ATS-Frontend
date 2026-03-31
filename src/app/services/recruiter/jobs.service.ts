import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApiResponse, JobDetails } from '../../models/job.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruiterJobsService {
  private apiUrl = `${environment.BASE_URL}/jobs`;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobApiResponse> {
    return this.http.get<JobApiResponse>(this.apiUrl);
  }

  getJobById(jobId: string): Observable<JobDetails> {
    return this.http.get<JobDetails>(`${this.apiUrl}/${jobId}`);
  }
}