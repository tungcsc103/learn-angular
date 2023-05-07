import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDirective } from './numeric.directive';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { CopyrightDirective } from './copyright.directive';
import { PermissionDirective } from './permission.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';


@NgModule({
  declarations: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective,
    KeyLoggerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective,
    KeyLoggerComponent
  ]
})
export class AppUtilModule { }
