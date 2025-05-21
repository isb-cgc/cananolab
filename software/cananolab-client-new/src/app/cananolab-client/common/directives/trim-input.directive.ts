import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[trimInput]',
    standalone: true
})
export class TrimInputDirective {
    constructor(private el: ElementRef, private control: NgControl) {}

    @HostListener('blur')
    onBlur() {
        if (this.control && this.control.control) {
            const value = this.control.value;
            if (typeof value === 'string') {
                this.control.control.setValue(value.trim());
            }
        }
    }
}
