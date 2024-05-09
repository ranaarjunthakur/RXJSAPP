import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";


@Injectable()
export class LoggerInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log(`REQURL ${req.url}`)
        // return next.handle(req)

       //Tapping Response

       return next.handle(req).pipe(
        tap(event=>{
            if(event.type == HttpEventType.Response){
                event.body.title ='Changed By Interceptor'
                console.log(event.body.title)
            }
        })
       )

    }


}