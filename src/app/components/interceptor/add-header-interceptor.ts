import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";


@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //1 way- add custom header

        let headerRequest = req.clone({
            setHeaders: {
                'x-company-name': 'VserveWorld'
            }
        })

        console.log('processing request',headerRequest)

        return next.handle(headerRequest)


        //2-way add custom header

        const customReq = req.clone({
            headers: req.headers.set('app-author', 'Rana')
          });

        return next.handle(customReq)

         //3rd-way add custom header

         const updatedreq= req.clone({
            headers: req.headers.append('interceptor-hheader','intercepted')
         })
          
         return next.handle(updatedreq)

    }


}