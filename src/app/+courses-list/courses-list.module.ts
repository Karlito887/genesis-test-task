import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesListRoutingModule} from './courses-list-routing.module';

import {CoursesListComponent} from './courses-list.component';


@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesListRoutingModule
  ]
})
export class CoursesListModule {
}
