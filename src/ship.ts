import Sprinte from './sprinte';
import Interaction from './interaction';
import IAnimation from './IAnimation';
import Animation from './animation';
import Shot from './shot';
import {DIRACTION} from './DIRACTION';



export default class Ship extends Sprinte implements IAnimation {

    waking: boolean = false;
    diraction = DIRACTION.UP
    speed: number = 1;
    rotate = 0;
    shoting = false;
    width = 30;
    height = 40;
    type = 'ship';
    constructor(context: any, private interations: Interaction, private animation: Animation) {
        super(context, 1, 1);
        this.interval = 60;
        this.x = 200;
        this.y = context.canvas.height - 40;
    }

    verifyDiraction(diraction :number) {
        return this.interations.keyPressed(diraction) && !this.waking &&
        !this.interations.keyPressed(DIRACTION.SPACE);
    }

    isWalking() {
        let walking = false;        
        Object.keys(DIRACTION).forEach((el:string) => {
            const diraction = DIRACTION[el];
            if(this.verifyDiraction(diraction)) {
                walking = true;
                this.diraction = diraction;
            }
        });
        this.waking = walking;
    }

    addShot() {
        if (this.interations.keyPressed(DIRACTION.SPACE) && !this.shoting) {
            const shot = new Shot(this.context, this, this.animation); 
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
        }else if (this.verifyDiraction(DIRACTION.LEFT)) {
            this.x -= this.speed;
            this.rotate = 15;
        }else if (this.verifyDiraction(DIRACTION.UP)) {
            this.y -= this.speed;
            this.rotate = 0;
        }
        else if (this.verifyDiraction(DIRACTION.DOWN)) {
            this.y += this.speed;
            this.rotate = 10;
        } 
      }

   draw() {
       this.context.save();
       this.context.translate(this.x, this.y);
       this.context.rotate(this.rotate / Math.PI);
       this.context.drawImage(this.image, -15, -15, this.width, this.height);
       this.context.restore();
   }
}