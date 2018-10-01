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
    if (/^\d*$/.test(event.key)) {
      if (!this.elementRef || !this.elementRef.nativeElement) return;
      const value = this.elementRef.nativeElement.value;
      if (value && value.startsWith('0')) {
        this.elementRef.nativeElement.value = parseFloat(value + event.key).toString();
        event.preventDefault();
      }
    } else
      event.preventDefault();
  }

// #endregion

}
