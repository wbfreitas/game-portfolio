import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game/game-config.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(private gameconf: GameConfigService) { }

  ngOnInit() {
  }
  reset() {
    this.gameconf.nextLevel();
  }

}
