import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';



@Component({
  selector: 'tw-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  isSmall: boolean = false;
  constructor(public gameService: GameService, private bo: BreakpointObserver) {
    this.players = this.gameService.players;
    this.bo.observe('(max-width: 700px)').subscribe((result) => {
      this.isSmall = result.matches;
    });
  }

  ngOnInit(): void {
  }

}
