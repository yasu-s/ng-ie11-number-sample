# Overview  

This is a sample number input directive compatible with IE11.

# System requirements

* Node.js 8.9.x
* TypeScript 2.9.x
* Angular 6.1.x

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-ie11-number-sample.git
```

## 2. Installing packages  

```
cd ng-ie11-number-sample
npm install
```

## 3. Launch sample application  

```
npm start
```

## 4. Execution result  

![ie11](https://user-images.githubusercontent.com/2668146/45686245-e19d6300-bb86-11e8-8248-76656edac24f.gif)

# Sample source

## src/app/custom-number.directive.ts

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[customNumber]'
})
export class CustomNumberDirective {

  /** input */
  private inputElement: HTMLInputElement;

  /**
   * CustomNumberDirective 
   * @param elementRef
   */
  constructor(private elementRef: ElementRef) {
    if (!this.elementRef || !this.elementRef.nativeElement) return;
    this.inputElement = <HTMLInputElement>this.elementRef.nativeElement;
  }

  /**
   * Enter numerical value only.
   * @param event KeyboardEvent
   */
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (!/^\d*$/.test(event.key))
      event.preventDefault();
  }

  /**
   * Convert to numerical value when focus is off.
   */
  @HostListener('blur')
  onBlur(): void {
    if (!this.inputElement) return;
    const value = this.inputElement.value;
    if (value === null || value === '') return;

    const num = Number(value);

    if (!isNaN(num))
      this.inputElement.value = num.toString();
  }

}
```

## src/app/app.component.ts

```typescript
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
```
