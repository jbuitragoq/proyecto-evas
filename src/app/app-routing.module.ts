import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/us/us.module').then(mod => mod.UsModule)
  },
  {
    path: '**', redirectTo: 'principal', pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'principal', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
