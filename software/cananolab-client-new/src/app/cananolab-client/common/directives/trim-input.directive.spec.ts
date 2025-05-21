import { ElementRef } from '@angular/core';
import { TrimInputDirective } from './trim-input.directive';
import {NgControl} from '@angular/forms';

describe('TrimInputDirective', () => {
    let el: ElementRef;
    let control: NgControl;

  it('should create an instance', () => {
    const directive = new TrimInputDirective(el, control);
    expect(directive).toBeTruthy();
  });
});
