import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {

  }

  decrement() {

  }

  reset() {

  }

}
