import { Component, Input, OnInit } from '@angular/core';
import data from '../../data/players-data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player-detail',
  standalone: true,
  imports: [],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnInit {
  filteredData: any[] = [];
  players = data;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let playerId = this.route.snapshot.params['id'];
    this.getPlayerDetailById(playerId);
  }

  getPlayerDetailById(id: string) {
    this.filteredData = this.players.filter((player) => player.id === id);
  }
}
