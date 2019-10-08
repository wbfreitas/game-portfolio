import { Injectable } from '@angular/core';
import GameConfig from 'src/app/model/games/constants/game-config';
import Skill from 'src/app/model/games/skill';
import Ship from 'src/app/model/games/ship';
import Interaction from 'src/app/model/games/interaction';
import Animation from './animation';
import IAnimation from '../../model/games/structure/IAnimation';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  private level = 1;
  imgs = [];
  frames = [];
  config: GameConfig = new GameConfig(this.level);
  enemies = this.config.skills.length;
  private levelO = new Subject<any>();
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

    Object.keys(this.config.songs)
      .forEach(song => this.newSong(this.config.songs[song]));

    this.imgs.forEach((img, i) =>
      img.onload = () => {
        if (i == this.imgs.length - 1) {
          this.config.isEnabled = true;
          animation.nextFrame();
        }
      });
    this.update();
  }

  update() {
    this.config.frames = this.frames.slice(0);
  }

  restart() {
    this.config = new GameConfig(this.level);
    this.update();
  }

  nextLevel() {
    this.level++;
    this.levelO.next(this.level);
    console.log('aqui');
    this.update();
  }


  newSong(path: string) {
    const song = new Audio();
    song.src = path;
    song.volume = 0.2;
    song.load();
    return song;
  }

  addSprintAndImg(sprinte: IAnimation, imagePahth: string) {
    this.addImage(sprinte, imagePahth);
    this.addSprint(sprinte);
  }

  removeSprinte(frame: IAnimation) {
    const index = this.config.frames.indexOf(frame);
    this.config.frames.splice(index, 1);
    if ((this.config.frames.length - 1) < 1) {
      this.nextLevel();
    }
  }

  removeEnemy(frame: IAnimation) {
    this.removeSprinte(frame);
    this.enemies--
    this.config.score += 10;
  }

  removeLife() {
    if (this.config.life > 0)
      this.config.life--;
    else {
      this.level = 0;
      this.restart();
    }
  }

  addSprint(frame: IAnimation) {
    this.frames.push(frame);
  }

  addImage(iAnimation: any, path: string) {
    const image = new Image();
    image.src = path;
    this.imgs.push(image);
    iAnimation.setImage(image);
  }

  getLevel(): Observable<any> {
    return this.levelO.asObservable();
  }
}
