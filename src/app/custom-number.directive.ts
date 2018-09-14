import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * カスタムイベントディレクティブ
 */
@Directive({
  selector: 'input[customNumber]'
})
export class CustomNumberDirective {

// #region fields

  /** */
  private inputElement: HTMLInputElement;

// #endregion

// #region init

  /**
   * CustomNumberDirective 生成処理
   * @param elementRef
   */
  constructor(private elementRef: ElementRef) {
    if (!this.elementRef || !this.elementRef.nativeElement) return;
    this.inputElement = (<HTMLInputElement>this.elementRef.nativeElement);
  }

// #endregion

// #region methods

  /**
   * 数値のみ入力
   * @param event
   */
  @HostListener('keypress', ['$event'])
  onKeydown(event: KeyboardEvent) {
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

// #endregion

}
