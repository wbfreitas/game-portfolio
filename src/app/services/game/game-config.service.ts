import { Injectable } from '@angular/core';
import GameConfig from 'src/app/model/games/constants/game-config';
import Skill from 'src/app/model/games/skill';
import Ship from 'src/app/model/games/ship';
import Interaction from 'src/app/model/games/interaction';
import Animation from 'src/app/components/game/animation';
import IAnimation from '../../model/games/structure/IAnimation';

@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  config: GameConfig = new GameConfig();
  imgs = [];
  skills = [];
  constructor() {
  } 

  setup(canvas: HTMLCanvasElement) {

    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    const animation = new Animation(context, this);
    const interaction = new Interaction(document);
    const ship = new Ship(context, interaction, this);
    this.addSprintAndImg(ship, this.config.ship.imagePath);

    this.config.skills.forEach(skill => {
      const s = new Skill(context, interaction, this);
      this.addSprintAndImg(s, skill.imagePath);
    });

    this.imgs.forEach((img, i)  =>
      img.onload = () => {
        console.log(i);
      if(i == this.imgs.length -1 ) {
        this.config.isEnabled = true; 
        animation.nextFrame();
      }
    });
    
  }

  addSprintAndImg(sprinte: IAnimation, imagePahth: string) {
    this.addImage(sprinte, imagePahth);
    this.addSprint(sprinte);
  }

  removeSprinte(frame: IAnimation) {
    const index = this.config.frames.indexOf(frame);
    this.config.frames.splice(index, 1);
  }

  addSprint(frame: IAnimation) {
    this.config.frames.push(frame);
  }

  addImage(iAnimation: any, path: string) {
    const image = new Image();
    image.src = path;
    this.imgs.push(image);
    iAnimation.setImage(image);
  }
}
