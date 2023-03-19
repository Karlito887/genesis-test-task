import {Injectable} from '@angular/core';

import {Observable, tap} from 'rxjs';

import {CoursesApiService} from './courses-api.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private readonly coursesApiService: CoursesApiService) {
  }

  public setToken(): Observable<any> {
    return this.coursesApiService.getToken()
      .pipe(
        tap(data => localStorage.setItem('token', data.token))
      );
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
