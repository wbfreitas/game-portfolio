import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Animation from './animation';
import Interaction from './entity/interaction';
import Skill from './entity/skill';
import Ship from './entity/ship';



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
  constructor() { }

  resizeCanvas() {
    const statusBarHeight = this.statusBar.nativeElement.offsetHeight;
    const w: number = window.innerWidth;
    const h: number = window.innerHeight - statusBarHeight;
    this.canvas.nativeElement.setAttribute('width', w.toString());
    this.canvas.nativeElement.setAttribute('height', h.toString());
  }

  ngOnInit() {
    this.resizeCanvas();
    const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');

    const animation = new Animation(context, this.canvas.nativeElement);
    const interaction = new Interaction(document);
    const ship = new Ship(context, interaction, animation);

    animation.addSprintAndImg(ship, 'assets/imgs/nave.png');

    skills.forEach(skill => {
      const s = new Skill(context, interaction, animation);
      animation.addSprintAndImg(s, skill.imagePath);
    });

    animation.images.load(() => {
      animation.enable();
      animation.nextFrame();
    });
  }
}
