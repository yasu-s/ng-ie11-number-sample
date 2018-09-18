# 概要  

IE11対応のnumber入力ディレクティブのサンプルです。

# 実行環境

* Node.js 8.9.x
* TypeScript 2.9.x
* Angular 6.1.x

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-ie11-number-sample.git
```

## 2. パッケージインストール  

```
cd ng-ie11-number-sample
npm install
```

## 3. サンプルの起動  

```
npm start
```

## 4. 実行結果  

![ie11](https://user-images.githubusercontent.com/2668146/45686245-e19d6300-bb86-11e8-8248-76656edac24f.gif)

# サンプルソース

## src/app/custom-number.directive.ts

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[customNumber]'
})
export class CustomNumberDirective {

  /** */
  private inputElement: HTMLInputElement;

  /**
   * CustomNumberDirective 生成処理
   * @param elementRef
   */
  constructor(private elementRef: ElementRef) {
    if (!this.elementRef || !this.elementRef.nativeElement) return;
    this.inputElement = (<HTMLInputElement>this.elementRef.nativeElement);
  }

  /**
   * 数値のみ入力
   * @param event
   */
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const str = String.fromCharCode(event.which);

    if (!'0123456789'.includes(str))
      event.preventDefault();
  }

  /**
   * フォーカスが外れた時に数値整形
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
