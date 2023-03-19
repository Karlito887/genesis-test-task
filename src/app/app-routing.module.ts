import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses-list'
  },
  {
    path: 'courses-list',
    loadChildren: () => import('./+courses-list/courses-list.module').then(m => m.CoursesListModule)
  },
  {
    path: 'course-details/:id',
    loadChildren: () => import('./+course-details/course-details.module').then(m => m.CourseDetailsModule)
  },
  {
    path: '**',
    redirectTo: 'courses-list'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
