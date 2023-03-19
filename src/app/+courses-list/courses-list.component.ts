import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subject, takeUntil} from 'rxjs';

import {CoursesApiService} from '../core/services';

import {CoursePreviewInterface} from '../core/interfaces';


@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  public allCourses: CoursePreviewInterface[] = [];
  public currentCoursesPortion: CoursePreviewInterface[] = [];

  constructor(private readonly coursesApiService: CoursesApiService) {
  }

  public ngOnInit(): void {
    this.coursesApiService.getCoursesList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(courses => {
        this.allCourses = courses.courses;
        this.currentCoursesPortion = this.allCourses.slice(0, 1);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
