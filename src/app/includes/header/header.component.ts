import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean= false;

  constructor(private router: Router,private ul:DesignUtilityService) { }

  ngOnInit(): void {
    this.ul.exclusive.subscribe(res=>{
      this.exclusive = res
    })
  }

  promisePage() {
    this.router.navigate(['/promise'])
  }

}
