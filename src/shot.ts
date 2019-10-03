import IAnimation from './IAnimation';
import Animation from './animation';
import Ship  from './ship';
import { DIRACTION } from './DIRACTION';

export default class Shot implements IAnimation {
  color = 'yellow';
  width = 5;
  height = 10;
  shoting = false;
  x = 0;
  y = 0;
  diraction: number;
  type = 'shot';
  constructor(private context :any,private ship: Ship, private animation :Animation) {
    this.x = ship.x;
    this.y = ship.y;
    this.diraction = ship.diraction;
    this.updateStart();
  }

  destroy() {
    if(this.y <= 0 || this.y > this.context.canvas.height 
       || this.x <= 0 || this.x >= this.context.canvas.width ) 
      this.animation.removeSprinte(this);
  }

  updateStart() { 
    switch(this.diraction) {
      case DIRACTION.UP:
        this.y -= this.height * 2;
        this.x -=  this.width / 2;
        break;
      case DIRACTION.DOWN:
          this.y += this.height;
          this.x -=  (this.width / 2); 
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
    switch(this.diraction) {
      case DIRACTION.UP:
        this.y--;
        break;
      case DIRACTION.DOWN:
        this.y++;
        break;
      case DIRACTION.RIGHT:
        this.x++;
        break;
      case DIRACTION.LEFT:
        this.x--;
        break;
    }
    this.destroy();
  }

  conflite(conflitent: IAnimation) {
      this.animation.removeSprinte(this);
  }

  draw() {
    const ctx = this.context;
    ctx.save();
    ctx.fillStyle = this.color;
    if(this.diraction == DIRACTION.LEFT || this.diraction == DIRACTION.RIGHT)
      ctx.fillRect(this.x, this.y, this.height, this.width);
    else
      ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();

  }

  setImage() {

  }
}