import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public counter$: Observable<number>;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  public navigateOther() {
    this.router.navigate(['other']);
  }

  public increment() {
    this.store.dispatch({ type: 'increment' });
  }

  public decrement() {
    this.store.dispatch({ type: 'decrement' });
  }

  public reset() {
    this.store.dispatch({ type: 'reset' });
  }

}
