import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player";

@Component({
  selector: 'tw-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(public gameService: GameService) {
    this.players = this.gameService.players;
  }

  ngOnInit(): void {
  }

}
