import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameConfigService } from 'src/app/services/game/game-config.service';

const skills = [
  { imagePath: 'assets/imgs/java.png' },
  { imagePath: 'assets/imgs/js.png' },
  { imagePath: 'assets/imgs/github.png' }
];

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('barStatus', { static: true })
  statusBar: ElementRef<HTMLCanvasElement>;
  constructor(public gameConfig: GameConfigService) { }

  resizeCanvas() {
    const statusBarHeight = this.statusBar.nativeElement.offsetHeight;
    const w: number = window.innerWidth;
    const h: number = window.innerHeight - statusBarHeight;
    this.canvas.nativeElement.setAttribute('width', w.toString());
    this.canvas.nativeElement.setAttribute('height', h.toString());
  }

  rangeArray(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
    this.resizeCanvas();
    this.gameConfig.setup(this.canvas.nativeElement);
  }
}
