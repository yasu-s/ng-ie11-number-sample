import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>IE11 Number Directive Sample</h2>
    <div>
      <ul>
        <li>type=text:<input type="text" [(ngModel)]="text1"> - {{ text1 }}</li>
        <li>type=number:<input type="number" [(ngModel)]="num1"> - {{ num1 }}</li>
        <li>type=number+customNumber:<input type="number" customNumber [(ngModel)]="num2"> - {{ num2 }}</li>
      </ul>
    </div>
  `
})
export class AppComponent {

  text1: string;

  num1: number;

  num2: number;

}
