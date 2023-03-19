import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {catchError, Subject, takeUntil, throwError} from 'rxjs';

import {CoursesApiService} from '../core/services';


@Component({
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly coursesApiService: CoursesApiService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.params['id'];

    this.coursesApiService.getCourseDetails(courseId)
      .pipe(
        catchError(error => {
          // TODO: notification error
          this.router.navigate(['courses-list']);

          return throwError(error);
        }),
        takeUntil(this.unsubscribe$))
      .subscribe(res => {
        console.log(res);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
