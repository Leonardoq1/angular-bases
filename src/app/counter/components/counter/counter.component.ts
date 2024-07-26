import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increment(2)">+1</button>
    <button (click)="resetDefaultCounter()">Reset</button>
    <button (click)="decrement(2)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10

  constructor() {}

  increment(value: number) {
    this.counter += value;
  }

  decrement(value: number){
    this.counter -= value;
  }


  resetDefaultCounter(){
    this.counter = 10;
  }
}
