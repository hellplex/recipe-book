import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown0]'
})
export class DropdownDirective0 {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    // add a class to the element it sits on, and remove when clicked again

    //MINE

    // isMenuOpen = false;

    // @Input() openClass: string = 'open';

    // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    // @HostListener('click') onclick(ev: MouseEvent){
    //     if (this.isMenuOpen) {
    //         this.renderer.removeClass(this.elRef.nativeElement, this.openClass);
    //     } else {
    //         this.renderer.addClass(this.elRef.nativeElement, this.openClass);
    //     }
    //     this.isMenuOpen = !this.isMenuOpen
    // }


}