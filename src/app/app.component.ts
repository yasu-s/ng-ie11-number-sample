import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>IE11 Number Directive Sample</h2>
    <div>
      <ul>
        <li>type=text:<input type="text"></li>
        <li>type=number:<input type="number"></li>
        <li>type=number+customNumber:<input type="number" customNumber></li>
      </ul>
    </div>
  `
})
export class AppComponent {
}
