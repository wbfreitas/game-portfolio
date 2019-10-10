import { Component, OnInit } from '@angular/core';
import { GameConfigService } from 'src/app/services/game/game-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameConfig: GameConfigService) { }

  ngOnInit() {
  }

}
