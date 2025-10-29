import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ConnectRequest {
  id: number;
  userId: number;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class ConnectRequestsService {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  /** Raw list for a user */
  listByUser(userId: number): Observable<ConnectRequest[]> {
    return this.http.get<ConnectRequest[]>(`http://localhost:3000/api/connect-requests/1`).pipe(
      tap(data => console.log('API Response for Connect Requests:', data))
    );
  }

  /** Count total connect requests for a user */
  countTotal(userId: number): Observable<number> {
    return this.listByUser(userId).pipe(map(arr => arr.length));
  }

  /** Count requests in the last 7 days */
  countLast7Days(userId: number): Observable<number> {
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    return this.listByUser(userId).pipe(
      map(arr => arr.filter(r => now - new Date(r.createdAt).getTime() < sevenDays).length)
    );
  }
}
