import { Component, OnInit } from '@angular/core';
import { faPlayCircle, faPauseCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {GameService} from "../game.service";

@Component({
  selector: 'tw-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.less']
})
export class ControlsComponent implements OnInit {
  faTrashAlt = faTrashAlt
  faPlayCircle = faPlayCircle
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

}
