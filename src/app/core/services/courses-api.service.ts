import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {PreviewCoursesListInterface} from '../interfaces';


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

  public getCoursesList(): Observable<PreviewCoursesListInterface> {
    return this.httpClient.get<PreviewCoursesListInterface>(`${this.apiUrl}/core/preview-courses`);
  }

  public getCourseDetails(courseId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/core/preview-courses/${courseId}`);
  }
}
