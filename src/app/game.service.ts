import {Injectable} from '@angular/core';
import {Player} from "./player";
import {RandomService} from "./random.service";
import {Field, FieldCell} from "./field";

class GameState {
  currentPlayerIndex: number
  field: FieldCell[]
  players: Player[];
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public players: Player[] = [
    new Player('Alice'),
    new Player('Bob'),
    new Player('Charly'),
    new Player('Dilan')
  ]
  public currentPlayer: Player
  private _currentPlayerIndex = 0;
  public readonly field: Field = new Field();
  private _history: GameState[] = [];

  constructor(private _randomService: RandomService) {
  }

  step() {
    this.currentPlayer = this.players[this._currentPlayerIndex];

    const cell = this._randomService.fromArray(this.field.cells); // todo free cells!
    const limb = this._randomService.fromArray(this.currentPlayer.limbs); // todo free limbs!

    if (!this.currentPlayer) { throw new Error('Player is null!');}
    if (!cell) { throw new Error('Cell is null!');}
    if (!limb) { throw new Error('Limb is null!');}

    cell.limb = limb;
    limb.cell = cell;

    this.nextPlayerIndex();
  }

  removePlayer() {
    const deleteIndex = this._currentPlayerIndex;
    this.players.splice(deleteIndex - 1, 1);
    this.nextPlayerIndex();
    this.currentPlayer = this.players[this._currentPlayerIndex];
  }
  undo() {
    const gs = this._history.pop();
    this.players = gs.players;
    this._currentPlayerIndex = gs.currentPlayerIndex;
    this.currentPlayer = this.players[this._currentPlayerIndex];
  }

  private nextPlayerIndex() {
    const gs = new GameState();
    gs.currentPlayerIndex = this._currentPlayerIndex;
    gs.players = this.players.slice();
    gs.field = this.field.cells.slice();
    this._history.unshift(gs);

    this._currentPlayerIndex = this._currentPlayerIndex >= this.players.length - 1 ? 0 : this._currentPlayerIndex + 1;
  }

}
