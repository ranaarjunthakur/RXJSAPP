import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal: any;
  AsyncAwaitVal:any;
  promise:any;

  url='https://jsonplaceholder.typicode.com/posts'

  dell = {
    brand: 'dell',
    hardDisk: '3 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'Grey'
  }

  notAvail = {
    brand: 'Not Available',
    status: 'failed'
  }

  constructor() { }


  dellAvailable() {
    return false
  }

  hpAvailable() {
    return true
  }

  ngOnInit(): void {
   
    //TODO:  Ex-02 Async/ Await  example

    this.promise = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell)
        }, 3000)
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp)
        }, 3000)
      } else {
        return setTimeout(() => {
          reject(this.notAvail)
        }, 3000)
      }
    })

    // this.promiseFun()
    // this.getData()
  }


  // Ex-01


  promiseFun() {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell)
        }, 3000)
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp)
        }, 3000)
      } else {
        return setTimeout(() => {
          reject(this.notAvail)
        }, 3000)
      }

    })

    buyLaptop.then(res => {
      console.log('success =>', res)
      this.promiseVal = JSON.stringify(res)
    }).catch(res => {
      console.log('error =>', res)
      this.promiseVal = JSON.stringify(res)
    })
  }




  /////////TODO: Async keyword with function always return TODO: promise///////////////

// Ex -02

 async getData(){
    this.AsyncAwaitVal  =  await  JSON.stringify(this.promise)
    console.log(this.AsyncAwaitVal)
  }


  /////////////////TODO: EX-03 using fetch 

  fetchApi(){
    fetch(this.url).then(res=>res.json())
    .then(
      json=>console.log(json))
  }


}
