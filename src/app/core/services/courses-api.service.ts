import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {
  private apiUrl = 'https://api.wisey.app/api/v1';

  constructor(private readonly httpClient: HttpClient) {
  }

  public getToken(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/auth/anonymous?platform=subscriptions`);
  }

  public getCoursesList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/core/preview-courses`);
  }
}