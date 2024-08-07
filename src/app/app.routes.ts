import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './pages/players-list/players-list.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players-list', component: PlayersListComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
