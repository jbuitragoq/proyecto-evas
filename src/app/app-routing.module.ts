import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule)
  },
  {
    path: 'us',
    loadChildren: () => import('./pages/us/us.module').then(mod => mod.UsModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then(mod => mod.ShopModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(mod => mod.GalleryModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
