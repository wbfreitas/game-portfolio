import { Component, OnInit } from '@angular/core';
import InteractionService from 'src/app/services/interaction.service';
import {DIRACTION} from 'src/app/model/games/structure/diraction';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

 diraction =  DIRACTION;
  constructor(private interaction: InteractionService) { }

  ngOnInit() {
  }

  action(diraction: number, status: boolean) {
    this.interaction.addEvent(diraction, status);
  }
}
