import {Component, OnInit} from '@angular/core';
import {CoursesApiService} from '../core/services/courses-api.service';

@Component({
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(private readonly coursesApiService: CoursesApiService) {
  }

  public ngOnInit(): void {
    this.coursesApiService.getCoursesList().subscribe(res => {
      console.log(res);
    });
  }
}
