import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = 'http://localhost:5168/api/jobs';  

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  searchJobs(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}`);
  }
}