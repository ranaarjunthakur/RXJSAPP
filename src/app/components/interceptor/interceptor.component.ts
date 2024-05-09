import { Component, OnInit } from '@angular/core';
import { HttpInterceptorService } from '../../services/http-interceptor.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss']
})
export class InterceptorComponent implements OnInit {

  result:any
  data:any=''

  constructor(private interceptor:HttpInterceptorService, private api:ApiService){

  }


  ngOnInit():void{
   this.interceptor.getData().subscribe((res)=>{
    console.log(res)
    this.result=res
    alert(this.result.title)
   }) 
  }


  getData(){
    this.api.getData().subscribe((res)=>{
      console.log(res)
      this.data=   JSON.stringify(res)
    })
  }

}
