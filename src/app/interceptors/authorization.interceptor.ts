import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private authorizationService : AuthorizationService) {
      //console.log("AuthorizationInterceptor constructor called");
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("intercept method called");
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authorizationService.getToken()}`
      }
    });
    return next.handle(request);
  }
}