import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('regExpStr') regExpStr : string;
  constructor(private el: ElementRef){

  }

  @HostListener('keydown', ['$event']) onKeyUp(event) {
    let e = <KeyboardEvent> event;
    let regExp = new RegExp(this.regExpStr);
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1) {
      return;
    }
    if(regExp.test(e.key)){
      return;
    }else{
      e.preventDefault();
    }
    /* 
    let typedVlaue: String = this.el.nativeElement.value;
    console.log("another format name==", this.anotherFormat);
    if(this.formatType === 'phoneNumber'){
      if(typedVlaue.length === 3){
        this.el.nativeElement.value = '('+ typedVlaue + ')';
      }
      if(typedVlaue.length === 8){
        this.el.nativeElement.value = typedVlaue + '-';
      }
    } */
    // this.el.nativeElement.value = typedVlaue.toUpperCase();
  }


}
