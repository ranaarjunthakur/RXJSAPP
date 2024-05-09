import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildHotelComponent } from './components/child-hotel/child-hotel.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ListComponent } from './components/observable/list/list.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
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

import { InterceptorComponent } from './components/interceptor/interceptor.component';
import { CounterComponent } from './components/counter/counter.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { CompleteRxjsComponent } from './components/observable/complete-rxjs/complete-rxjs.component';


const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'promise'
  },
  {
    path: 'hotel',
    component: ChildHotelComponent
  },
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'fromEvent',
        component: FromEventComponent
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
      {
        path: 'of-from',
        component: OfFromComponent
      },
      {
        path: 'toArray',
        component: ToArrayComponent
      },
      {
        path: 'customObervable',
        component: CustomObservableComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'pluck',
        component: PluckComponent
      },
      {
        path: 'filter',
        component: FilterComponent
      },
      {
        path: 'tap',
        component: TapComponent
      },
      {
        path: 'take',
        component: TakeComponent
      },
      {
        path: 'retry',
        component: RetryComponent
      },
      {
        path: 'debounce',
        component: DebounceTimeComponent
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'replay',
        component: ReplaySubjectComponent
      },
      {
        path: 'async',
        component: AsyncSubjectComponent
      },
      {
        path: 'concat',
        component: ConcatComponent
      },
      {
        path: 'merge',
        component: MergeComponent
      },
      {
        path: 'mergeMap',
        component: MergeMapComponent
      },
      {
        path: 'concatMap',
        component: ConcatMapComponent
      },
      {
        path: 'concatMap2',
        component: ConcatMap2Component
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent
      },
      {
        path: 'switchMap2',
        component: SwitchMap2Component
      },
      {
        path: 'exhaustMap',
        component: ExhaustMapComponent
      },
      {
        path: 'shareReplay',
        component: ShareReplayComponent
      },
      {
        path: 'combineLatest',
        component: CombineLatestComponent
      },
      {
        path: 'catchError',
        component: CatchErrorComponent
      },
      {
        path: 'completeRxjs',
        component: CompleteRxjsComponent
      },
    ]
  },
  {
    path:'interceptor',
    component:InterceptorComponent
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path: 'hooks',
    component: LifeCycleHooksComponent
  },
  {
    path: '**',
    redirectTo: 'promise'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
