import Sprinte from './sprinte';
import Interaction from './interaction';
import IAnimation from './IAnimation';
import Animation from './Animation';
import Shot from './shot';
import {DIRACTION} from './diraction';

const linesNum = 1;
const columnsNum = 1;


export default class Ship extends Sprinte implements IAnimation {

    waking: boolean = false;
    diraction = DIRACTION.RIGHT
    speed: number = 1;
    rotate = 0;
    shoting = false;
    constructor(context: any, private interations: Interaction, private animation: Animation) {
        super(context, 1, 1);
        this.interval = 60;
        this.x = 200;
        this.y = context.canvas.height - 40;
    }

    verifyDiraction(diraction :DIRACTION) {
        return this.interations.keyPressed(diraction) && !this.waking;
    }

    isWalking() {
        let walking = false;        
        for(const diraction in DIRACTION) 
            if(this.verifyDiraction(DIRACTION.RIGHT)) {
                walking = true;
            }
        this.waking = walking;
    }

    addShot() {
        if (this.interations.keyPressed(DIRACTION.SPACE) && !this.shoting) {
            const shot = new Shot(this.context, this); 
            this.animation.sprintes.push(shot);
            shot.draw();
            this.shoting = true;
        } else if(!this.interations.keyPressed(DIRACTION.SPACE))  {
            this.shoting = false;
        }
    }

    update() {
        this.isWalking();
        this.addShot();
        if (this.verifyDiraction(DIRACTION.RIGHT)) {
            this.x += this.speed;
            this.rotate = 5;
        }
        if (this.verifyDiraction(DIRACTION.LEFT)) {
            this.x -= this.speed;
            this.rotate = 15;
        }
        if (this.verifyDiraction(DIRACTION.UP)) {
            this.y -= this.speed;
            this.rotate = 0;
        }
        if (this.verifyDiraction(DIRACTION.DOWN)) {
            this.y += this.speed;
            this.rotate = 10;
        } 
      }

   draw() {
       this.context.save();
       this.context.translate(this.x, this.y);
       this.context.rotate(this.rotate / Math.PI);
       this.context.drawImage(this.image, -15, -15, 30, 40);
       this.context.restore();
   }
}