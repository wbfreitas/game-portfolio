import IAnimation from './structure/ianimation';
import Ship from './ship';
import { DIRACTION } from './structure/diraction';
import { GameConfigService } from 'src/app/services/game/game-config.service';

export default class Shot implements IAnimation {
  color = 'yellow';
  width = 5;
  height = 10;
  shoting = false;
  x = 0;
  y = 0;
  diraction: number;
  speed = 6;
  constructor(private context: any, private ship: Ship, private gameConfig: GameConfigService) {
    this.x = ship.x;
    this.y = ship.y;
    this.diraction = ship.diraction;
    this.gameConfig.newSong(this.gameConfig.config.songs.shot).play();
    this.updateStart();
  }

  destroy() {
    if (this.y <= 0 || this.y > this.context.canvas.height
      || this.x <= 0 || this.x >= this.context.canvas.width)
      this.gameConfig.removeSprinte(this);
  }

  updateStart() {
    switch (this.diraction) {
      case DIRACTION.UP:
        this.y -= this.height * 2;
        this.x -= this.width / 2;
        break;
      case DIRACTION.DOWN:
        this.y += (this.height * 2) + 20;
        this.x -= (this.width / 2);
        break;
      case DIRACTION.RIGHT:
        this.x += (this.width * 2) + 20;
        break;
      case DIRACTION.LEFT:
        this.x -= (this.width * 2) + 10;
        break;
    }
  }
  update() {
    switch (this.diraction) {
      case DIRACTION.UP:
        this.y -= this.speed;
        break;
      case DIRACTION.DOWN:
        this.y += this.speed;
        break;
      case DIRACTION.RIGHT:
        this.x += this.speed;
        break;
      case DIRACTION.LEFT:
        this.x -= this.speed;
        break;
    }
    this.destroy();
  }

  conflite(conflitent: IAnimation) {
    this.gameConfig.removeSprinte(this);
  }

  draw() {
    const ctx = this.context;
    ctx.save();
    ctx.fillStyle = this.color;
    if (this.diraction == DIRACTION.LEFT || this.diraction == DIRACTION.RIGHT)
      ctx.fillRect(this.x, this.y, this.height, this.width);
    else
      ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();

  }

  setImage() {

  }
}