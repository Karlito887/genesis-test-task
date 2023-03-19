import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {TokenService} from '../services/token.service';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private readonly tokenService: TokenService) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.tokenService.getToken();

    return next.handle(this.addTokenToRequest(request, userToken));
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({setHeaders: {Authorization: `Bearer ${token}`}});
  }
}

