import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class SharedModule { }
