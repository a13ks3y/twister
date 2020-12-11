import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {GameService} from "../game.service";
class MenuItem {
  private readonly _click: Function;
  public readonly title: string;
  public active: boolean;
  constructor(title: string, clickHandler: Function) {
    this.title = title;
    this._click = clickHandler || (() => {});
  }
  click() {
    this._click && this._click(this);
  }
}

@Component({
  selector: 'tw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  public readonly items: MenuItem[] = [];
  public readonly faBars = faBars;
  public active: boolean = false;
  //todo: move default players names to constants
  public playerNames: string[] = [
    "Alice",
    "Bob",
    "Charly",
    "Dilan"
  ];
  constructor(public gameService: GameService) {
    this.items.push(new MenuItem('New Game', this.newGame.bind(this)));
    this.items.push(new MenuItem('Save', this.save.bind(this)));
    this.items.push(new MenuItem('Load', this.load.bind(this)));
  }

  ngOnInit(): void {

  }

  newGame() {
    alert('Not implemented yet!');
  }

  save() {
    alert('Not implemented yet!');
  }

  load() {
    alert('Not implemented yet!');
  }

  toggleMenu() {
    this.active = !this.active;
  }
}
