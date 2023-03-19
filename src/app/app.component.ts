import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subject} from 'rxjs';

import {TokenService} from './core/services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly tokenService: TokenService) {
  }

  public ngOnInit(): void {
    this.tokenService.setToken().subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
