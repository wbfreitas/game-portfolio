import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game/game-config.service';

@Component({
  selector: 'app-next-level',
  templateUrl: './next-level.component.html',
  styleUrls: ['./next-level.component.scss']
})
export class NextLevelComponent implements OnInit {

  level: number;
  constructor(public gameConfig: GameConfigService) { }

  ngOnInit() {
    this.gameConfig.getLevel().subscribe(level => this.level = level);
  }

}
