import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieVoiturePage } from './categorie-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieVoiturePageRoutingModule {}
