import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import data from '../../data/players-data.json';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';

@Component({
  selector: 'players-list',
  standalone: true,
  imports: [HeaderComponent, NgFor, RouterLink, PlayerDetailComponent],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
})
export class PlayersListComponent {
  players = data;
}
