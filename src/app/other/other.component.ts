import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  public counter$: Observable<number>;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  public navigateMain() {
    this.router.navigate(['']);
  }
}
