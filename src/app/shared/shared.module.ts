import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './modules/material.module';

import {ItemsListPipe} from './pipes/items-list.pipe';


@NgModule({
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ItemsListPipe
  ],
  declarations: [
    ItemsListPipe
  ]
})
export class SharedModule {
}
