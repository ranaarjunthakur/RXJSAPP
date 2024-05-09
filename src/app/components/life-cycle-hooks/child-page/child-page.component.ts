import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildPageComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()  data!:string[];
  @Input() Name = '';
  @ViewChild('wrapper') wrapper!: ElementRef
  @ContentChild('contentWrapper') content!: ElementRef

  //TODO: firstly call  hook

  constructor(private cd:ChangeDetectorRef) {
    console.log('constructor Is Calling')
  }


  refresh(){
    this.cd.detectChanges();
  }


  //TODO: takes a argument and its called when changes is detect. & Called when the input properties have changed.

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Is Calling', changes)
  }


  //TODO:  its called after calling a ngOnChanges.&	Called on initialization.


  ngOnInit(): void {
    console.log('ngOnInit Is Calling')
  }

  //TODO:  its called always on changes like click  button etc. & Developer’s custom change detection//


  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }


  //TODO: Call Only One Time & Called when the component’s content ngContent is initialized.

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }


  //TODO: Detect a Changes everyTime on  a component & This method is called once  //

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }


  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }


}
