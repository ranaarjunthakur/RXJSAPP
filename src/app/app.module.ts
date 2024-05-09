import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatCheckboxModule} from '@angular/material/checkbox';



import { RedElDirective } from './directives/red-el.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ParenthotelComponent } from './components/parenthotel/parenthotel.component';
import { ChildHotelComponent } from './components/child-hotel/child-hotel.component';

import { RainbowDirective } from './directives/rainbow.directive';
import { AppTestDirective } from './directives/app-test.directive';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { ListComponent } from './components/observable/list/list.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { CustomObservableComponent } from './components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './components/observable/map/map.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { TakeComponent } from './components/observable/take/take.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { DebounceTimeComponent } from './components/observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { ReplaySubjectComponent } from './components/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/observable/async-subject/async-subject.component';
import { ConcatComponent } from './components/observable/concat/concat.component';
import { MergeComponent } from './components/observable/merge/merge.component';
import { MergeMapComponent } from './components/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/observable/concat-map/concat-map.component';
import { ConcatMap2Component } from './components/observable/concat-map2/concat-map2.component';
import { SwitchMapComponent } from './components/observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './components/observable/switch-map2/switch-map2.component';
import { ExhaustMapComponent } from './components/observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './components/observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './components/observable/combine-latest/combine-latest.component';
import { CatchErrorComponent } from './components/observable/catch-error/catch-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SampleComponent } from './includes/sample/sample.component';
import { InterceptorComponent } from './components/interceptor/interceptor.component';
import { LoggerInterceptor } from './components/interceptor/logger-interceptor';
import { AddHeaderInterceptor } from './components/interceptor/add-header-interceptor';
import { ErrorCatchingInterceptor } from './components/interceptor/error-catching-interceptor';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { ChildPageComponent } from './components/life-cycle-hooks/child-page/child-page.component';
import { CompleteRxjsComponent } from './components/observable/complete-rxjs/complete-rxjs.component';
// import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    RedElDirective,
    ParenthotelComponent,
    ChildHotelComponent,
    RainbowDirective,
    AppTestDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMap2Component,
    SwitchMapComponent,
    SwitchMap2Component,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    CatchErrorComponent,
    SampleComponent,
    InterceptorComponent,
    LifeCycleHooksComponent,
    ChildPageComponent,
    CompleteRxjsComponent,
    // CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    FontAwesomeModule,
    MatCheckboxModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass: LoggerInterceptor, multi:true},
               {provide:HTTP_INTERCEPTORS , useClass: AddHeaderInterceptor, multi:true},
               {
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorCatchingInterceptor,
                multi: true
             }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
