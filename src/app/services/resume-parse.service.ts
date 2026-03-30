import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResumeParseResponse } from '../models/resume-parse.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeParseService {

  private readonly apiUrl = 'http://localhost:5168/api/resume/parse';

  private _parsedResume$ = new ReplaySubject<ResumeParseResponse | null>(1);
  parsedResume$ = this._parsedResume$.asObservable();

  private _isUploading$ = new BehaviorSubject<boolean>(false);
  isUploading$ = this._isUploading$.asObservable();

  constructor(private http: HttpClient) {}

  uploadAndParse(file: File, candidateId: string): Observable<ResumeParseResponse> {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('candidateId', candidateId);
    this._isUploading$.next(true);

    return this.http.post<ResumeParseResponse>(this.apiUrl, formData).pipe(
      tap({
        next: (response) => {
          this._parsedResume$.next(response);
          this._isUploading$.next(false);
        },
        error: () => this._isUploading$.next(false)
      })
    );
  }

  clearParsedResume(): void {
    this._parsedResume$.next(null);
  }
}