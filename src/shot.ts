import IAnimation from './IAnimation';
import Ship  from './ship';

export default class Shot implements IAnimation {
  color = 'yellow';
  width = 5;
  height = 10;
  shoting = false;
  x = 0;
  y = 0;
  constructor(private context :any, ship: Ship) {
    this.x = ship.x;
    this.y = ship.y - 40;
  }

  update() {
    this.y--;
  }

  draw() {
    const ctx = this.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();

  }

  setImage() {

  }
}
