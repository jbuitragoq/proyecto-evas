import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    BlogComponent,
    DetailComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule
  ]
})
export class BlogModule { }
