import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinesComponent } from './vaccines.component';
import { VaccinesRoutingModule } from './vaccines-routing.module';


@NgModule({
  declarations: [VaccinesComponent],
  imports: [
	CommonModule,
	VaccinesRoutingModule
  ]
})
export class VaccinesModule { }
