import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDirective } from './numeric.directive';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import { CopyrightDirective } from './copyright.directive';
import { PermissionDirective } from './permission.directive';


@NgModule({
  declarations: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective
  ]
})
export class AppUtilModule { }
