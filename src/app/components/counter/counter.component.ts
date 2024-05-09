import { Component, OnInit } from '@angular/core';
// import { signal } from '@angular/core'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone:true
})
export class CounterComponent implements OnInit {

  // private count = signal()


  constructor(){

  }

  ngOnInit(): void {
  }

}
