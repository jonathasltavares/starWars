import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { NaveComponent } from './pages/nave/nave.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'filmes',
    component: FilmesComponent,
  },
  {
    path: 'nave',
    component: NaveComponent,
  },
];
