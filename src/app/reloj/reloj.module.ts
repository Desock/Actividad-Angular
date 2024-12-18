import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { relojComponent } from './components/reloj_component';



@NgModule({
  declarations: [
    relojComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    relojComponent
  ]
})
export class RelojModule { }
