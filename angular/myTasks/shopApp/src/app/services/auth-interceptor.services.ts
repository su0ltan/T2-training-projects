import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const modifiedReq = req.clone({
      headers: req.headers.append(
        'Desc',
        'This request is made as modified version of the original version to add modifications '
      ),
      url: `https://fakestoreapi.com/${req.url}`,
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      }),
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(req.url, 'returned a response with status', event.status);
        }
      })
    );
  }
}

//valid url:  'https://fakestoreapi.com/car'
//invalid url: https://fakestoreapi.com/carts/5
