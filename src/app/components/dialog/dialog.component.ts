import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParenthotelComponent } from '../parenthotel/parenthotel.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  res:any;
  users:any;

  closeMessage = {
    "1" : "Monday",
    "2" : "Tuesday",
    "3" : "Wednesday",
    "4" : "Thursday",
    "5" : "Friday",
    "6" : "Saturday",
    "0" : "Sunday"
}

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private Ref : MatDialogRef<ParenthotelComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.res = this.data
  }

  closeModal(){
    this.Ref.close(
      this.users = {
        'barney':  { 'age': 36, 'active': true },
        'fred':    { 'age': 40, 'active': false },
        'pebbles': { 'age': 1,  'active': true }
      }
    )
  }

}
