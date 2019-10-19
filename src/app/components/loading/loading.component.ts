import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game/game-config.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  porcent = '0%';
  constructor(private gameConfig: GameConfigService) { }

  ngOnInit() {
    this.gameConfig.getProgress().subscribe(progress => this.porcent = progress + '%');
  }


}
