import { Component, OnInit } from '@angular/core';
import { faPlayCircle, faPauseCircle, faTrashAlt, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faStepBackward, faFastBackward, faPlay, faHistory, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {GameService} from "../game.service";

@Component({
  selector: 'tw-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.less']
})
export class ControlsComponent implements OnInit {
  faTrashAlt = faTrashAlt
  faPlayCircle = faPlay
  faArrowAltCircleLeft = faStepBackward
  faHistory = faHistory
  faAddressCard = faAddressCard
  historyShown: boolean;
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

}
