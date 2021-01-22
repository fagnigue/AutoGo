import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscrire',
    loadChildren: () => import('./inscrire/inscrire.module').then( m => m.InscrirePageModule)
  },
  {
    path: 'categorie-voiture',
    loadChildren: () => import('./categorie-voiture/categorie-voiture.module').then( m => m.CategorieVoiturePageModule)
  },
  {
    path: 'voiture',
    loadChildren: () => import('./voiture/voiture.module').then( m => m.VoiturePageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
