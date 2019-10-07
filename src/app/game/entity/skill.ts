import Sprinte from '../sprinte';
import Interaction from './interaction';
import IAnimation from '../structure/ianimation';
import Animation from '../animation';
import Explosion from './explosion';
import Shot from './shot';

export default class Skill extends Sprinte implements IAnimation {
    speedX: number = 0.2;
    speedY: number = 0.2;
    rotate = 0;
    width = 30;
    height = 30;
    rotateSpeed = 2;
    constructor(context: any, private interations: Interaction, private animation: Animation) {
        super(context, 1, 1);
        this.interval = 60;
        this.x = Math.floor(Math.random() * this.context.canvas.width) + 1;;
        this.y = Math.floor(Math.random() * this.context.canvas.height) + 1;;
        if (Math.floor(Math.random() * (2))) {
            this.changeDiraction();
        }
    }

    changeDiraction() {
        this.speedX *= -1;
        this.speedY *= -1;
        this.rotateSpeed *= -1;
    }

    update() {
        var ctx = this.context;
        if (this.x > ctx.canvas.width - 30 || this.x < 0)
            this.speedX *= -1;

        if (this.y > ctx.canvas.height - 30 || this.y < 0)
            this.speedY *= -1;

        this.x += this.speedX;
        this.y += this.speedY;

    }

    conflite(conflitent: IAnimation) {
        if (conflitent instanceof Shot) {
            new Explosion(this.context, this.x, this.y, this.animation);
            this.animation.removeSprinte(this);
            this.animation.config.score += 10;
        } else if (conflitent instanceof Skill) {
            this.changeDiraction();
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    draw() {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotate / 180 / Math.PI);

        this.context.drawImage(this.image, -16, -16, this.width, this.height);

        this.context.restore();

        this.rotate += this.rotateSpeed;
    }
}
