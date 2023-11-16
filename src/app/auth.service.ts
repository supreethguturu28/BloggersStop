// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const endpoint = `${this.apiUrl}/login`;
    const body = { username, password };
    return this.http.post(endpoint, body);
  }
}
