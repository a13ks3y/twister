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
  get currentPlayer(): Player {
    return this.players[this._currentPlayerIndex];
  }
  public players: Player[] = [
    new Player('Alice'),
    new Player('Bob'),
    new Player('Charly'),
    new Player('Dilan')
  ]
  private _currentPlayerIndex = 0;
  public readonly field: Field = new Field();
  private _history: GameState[] = [];

  constructor(private _randomService: RandomService) {
  }

  step() {
    const currentPlayer = this.currentPlayer;
    if (!this.currentPlayer) { throw new Error('Player is null!');}
    const freeCells = this.field.getFreeCells();
    const freeLimbs = this.currentPlayer.getFreeLimbs();
    // todo unit test that part with free limbs and cells!
    const cell = this._randomService.fromArray(freeCells);
    const limb = freeLimbs.length
      ? this._randomService.fromArray(freeLimbs)
      : this.currentPlayer.freeLimb(this._randomService.fromArray(this.currentPlayer.limbs));

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
  }
  undo() {
    const gs = this._history.pop();
    this.players = gs.players;
    this._currentPlayerIndex = gs.currentPlayerIndex;
  }

  private nextPlayerIndex() {
    const gs = new GameState();
    gs.currentPlayerIndex = this._currentPlayerIndex;
    gs.players = this.players.slice();
    gs.field = this.field.cells.slice();
    this._history.push(gs);

    this._currentPlayerIndex = this._currentPlayerIndex + 1 >= this.players.length ? 0 : this._currentPlayerIndex + 1;
  }

}
