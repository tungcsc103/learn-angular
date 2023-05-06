import { ElementRef } from '@angular/core';
import { CopyrightDirective } from './copyright.directive';

describe('CopyrightDirective', () => {
  it('should create an instance', () => {
    let el = new ElementRef(null)
    const directive = new CopyrightDirective(el);
    expect(directive).toBeTruthy();
  });
});
