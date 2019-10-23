import { Component, OnInit } from '@angular/core';
import InteractionService from 'src/app/services/interaction.service';
import {DIRACTION} from 'src/app/model/games/structure/diraction';
import { GameConfigService } from 'src/app/services/game/game-config.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

 diraction =  DIRACTION;
  constructor(private gameConfig: GameConfigService) {
   }

  ngOnInit() {
  }

  action(diraction: number, status: boolean) {
    this.gameConfig.interactions.addEvent(diraction, status);
  }
}
