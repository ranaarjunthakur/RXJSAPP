import { Component, OnDestroy, OnInit } from '@angular/core';
import { DarkModeService } from "angular-dark-mode";


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit , OnDestroy{


  darkMode$ = this.darkModeService.darkMode$;
  isThemeDark: any;
  themeService: any;
  

  constructor(
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  ngOnDestroy(){
    this.isThemeDark.unsubscribe()
  }

}
