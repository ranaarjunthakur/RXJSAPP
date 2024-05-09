import { Component, OnInit } from '@angular/core';
import { from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1: any;
  msg1: any;
  names: any;

  constructor(private utlServ:DesignUtilityService) { }

  ngOnInit(): void {

    //TODO:   example 01

    const broadCastVideos = interval(1000)

    this.sub1 = broadCastVideos.pipe(map((res: any) => 'Video' + res))
      .subscribe((res) => {
        console.log(res)
        this.msg1 = res
      })


    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);


    ///////////////TODO:   example 02/////////////////


    const source  = from([
      { name: 'Alex', age: 31 },
      { name: 'Adam', age: 28 },
      { name: 'Alia', age: 21 },
      { name: 'David', age: 35 },
      { name: 'Rhea', age: 28 },
      { name: 'Samson', age: 31 },
      { name: 'Dhoni', age: 35 }
    ]);


    const example = source.pipe(map(({ name }) => name))
    example.subscribe((res: any) => {
      console.log(res);
      this.names = res
      this.utlServ.print(res,'elContainer')
    })

  }

}
