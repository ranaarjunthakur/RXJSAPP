import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  UserName:any;

  constructor(private  ul:DesignUtilityService) { 
    this.ul.userName.subscribe((res)=>{
      this.UserName = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uname: any) {
    console.log(uname.value)
    this.ul.userName.next(uname.value)
    // this.UserName = uname.value
  }
}
