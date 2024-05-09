import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, map, throwError } from "rxjs";


@Injectable()

export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passed through the interceptor in request");

        return next.handle(req).pipe(
            map(res=>{
                console.log("Passed through the interceptor in response");
                    return res
            }),
            catchError((error:HttpErrorResponse)=>{
                let errorMsg=''
                if(error.error instanceof ErrorEvent){
                    console.log('this is Client side Error');
                    errorMsg = `Error: ${error.error.message}`
                }else{
                    console.log('this is serve side error');
                    errorMsg =  `Error Code: ${error.status}, ${error.message}` 
                }
                console.log(errorMsg)
                return throwError(errorMsg)
            })
        )
    }

  

}