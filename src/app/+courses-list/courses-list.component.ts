import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

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

  constructor(private readonly coursesApiService: CoursesApiService,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.coursesApiService.getCoursesList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(courses => {
        this.allCourses = courses.courses;
        this.currentCoursesPortion = this.allCourses.slice(0, 10);
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public changePage(event: PageEvent): void {
    const end = event.pageIndex * 10 + 10;
    const start = end - 10;

    this.currentCoursesPortion = this.allCourses.slice(start, end);
  }

  public selectCourse(id: string): void {
    this.router.navigate(['course-details', id]);
  }
}
