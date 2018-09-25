import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * カスタムイベントディレクティブ
 */
@Directive({
  selector: 'input[customNumber]'
})
export class CustomNumberDirective {

// #region init

  /**
   * CustomNumberDirective 生成処理
   * @param elementRef
   */
  constructor(private elementRef: ElementRef<HTMLInputElement>) {
  }

// #endregion

// #region methods

  /**
   * 数値のみ入力
   * @param event KeyboardEvent
   */
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (!'0123456789'.includes(event.key))
      event.preventDefault();
  }

  /**
   * フォーカスが外れた時に数値整形
   */
  @HostListener('blur')
  onBlur(): void {
    if (!this.elementRef || !this.elementRef.nativeElement) return;
    const value = this.elementRef.nativeElement.value;
    if (value === null || value === '') return;

    const num = Number(value);

    if (!isNaN(num))
      this.elementRef.nativeElement.value = num.toString();
  }

// #endregion

}
