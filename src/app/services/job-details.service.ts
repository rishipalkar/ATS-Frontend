import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDetailsResponse } from '../models/job-details.model';


@Injectable({
  providedIn: 'root'
})
export class JobsDetailsService {

  private baseUrl = 'http://localhost:5168/api/jobs';

  constructor(private http: HttpClient) {}

  getJobDetails(jobId: string): Observable<JobDetailsResponse> {
    return this.http.get<JobDetailsResponse>(
      `${this.baseUrl}/job-details?jobId=${jobId}`
    );
  }
}