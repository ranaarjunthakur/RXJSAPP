import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from '../../../services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  obsMsg:any;
  videoSubscription!: Subscription;

  constructor( private Utlityservice:DesignUtilityService) { }

  ngOnInit(): void {
    const video = interval(1000)   // interval(interval)
    // const video = timer(4000,1000)   // timer(delay,interval)

   this.videoSubscription = video.subscribe(res=>{  
      console.log(res);
      this.obsMsg='video'+res;
      this.Utlityservice.print(this.obsMsg,'elContainer')
      this.Utlityservice.print(this.obsMsg,'elContainer1')
      this.Utlityservice.print(this.obsMsg,'elContainer2')
      if(res>=5){
        this.videoSubscription.unsubscribe()
      }
    })
  }

  ngOnDestroy(): void {
    // this.videoSubscription.unsubscribe()
  }


}
