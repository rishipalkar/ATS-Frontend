import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventResponse {
  scheduledAt: string;
  roundName: string;
}

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:5168/api/getEvents/single';

  constructor(private http: HttpClient) {}

  getEventsByDate(date: string): Observable<EventResponse[]> {
    return this.http.get<EventResponse[]>(
      `${this.baseUrl}?date=${encodeURIComponent(date)}`
    );
  }
}