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

  private level = 0;
  private imgs = [];
  private frames = [];
  private skills = [];
  config: GameConfig = new GameConfig(this.level);
  private ship: Ship;
  private levelO = new Subject<any>();
  private progress = new Subject<any>();
  private animation: Animation;
  showNextLevel = false;
  constructor() {
  }

  setup(canvas: HTMLCanvasElement) {

    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    this.animation = new Animation(context, this);
    const interaction = new Interaction(document);
    this.ship = new Ship(context, interaction, this);
    this.addImage(this.ship, this.config.ship.imagePath);

    this.config.skills.forEach(skill => {
      const s = new Skill(context, interaction, this);
      this.skills.push(s);
      this.addImage(s, skill.imagePath);
    });

    this.loading();
  }

  private update() {
    this.config.frames = [this.ship, ...this.skills.slice(0)];
  }

  private restart() {
    this.config = new GameConfig(this.level);
    this.update();
  }

  private nextLevel() {
    this.showNextLevel = true;
    this.config.isEnabled = false;
    this.level++;
    this.levelO.next(this.level);
    this.update();
    setTimeout(() => {
      this.showNextLevel = false;
      this.config.isEnabled = true;
    }, 1000);
  }


  private addImage(iAnimation: any, path: string) {
    const image = new Image();
    image.src = path;
    this.imgs.push(image);
    iAnimation.setImage(image);
  }

  private setProgress(progress: number, total: number) {
    setTimeout(() => {
      const porcent = progress / total * 100;
      this.progress.next(porcent);
        if (progress == total) {
          this.nextLevel();
          this.animation.nextFrame();
        }
    }, 1000);
  }


  private loading() {
    const total = this.imgs.length + Object.keys(this.config.songs).length;
    let loading = 1;

    this.imgs.forEach((img, i) =>
      img.onload = () => {
        this.setProgress(loading++, total);
      });

    Object.keys(this.config.songs)
      .forEach(song => {
        this.newSong(this.config.songs[song]);
        this.setProgress(loading++, total);
      });

  }

  removeSprinte(frame: IAnimation) {
    const index = this.config.frames.indexOf(frame);
    this.config.frames.splice(index, 1);
    if ((this.config.frames.length - 1) < 1) {
      this.nextLevel();
    }
  }

  newSong(path: string) {
    const song = new Audio();
    song.src = path;
    song.volume = 0.2;
    song.load();
    return song;
  }

  removeEnemy(frame: IAnimation) {
    this.removeSprinte(frame);
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

  getProgress(): Observable<any> {
    return this.progress.asObservable();
  }

  getLevel(): Observable<any> {
    return this.levelO.asObservable();
  }

}
