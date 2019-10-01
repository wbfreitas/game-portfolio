
import Sprinte from './sprinte';
import Interaction from './interaction';
import IAnimation from './IAnimation';

export default class Skill extends Sprinte implements IAnimation {
    speedX: number = 0.1;
    speedY: number = 0.1;
    rotate = 0;
    constructor(context: any, private interations: Interaction) {
        super(context, 1, 1);
        this.interval = 60;
        this.x = Math.floor(Math.random() * this.context.canvas.width) + 1;;
        this.y = Math.floor(Math.random() * this.context.canvas.height) + 1;;
    }

   update() {
      var ctx = this.context;
       if (this.x > ctx.canvas.width - 30)
           this.speedX *= -1;
        else if(this.x < 0) {
            this.speedX = 0.1;
        }

       if (this.y > ctx.canvas.height - 30) {
           this.speedY *= -1;
       }
        else if(this.y < 0) {
            this.speedY = 0.1;
        }

       this.x += this.speedX;
       this.y += this.speedY; 


   } 

   draw() {

      this.context.save();
      this.context.translate(this.x, this.y);
      this.context.rotate(this.rotate / 180 / Math.PI);

         this.context.drawImage(this.image, -16, -16, 30, 30);

         this.context.restore();

         this.rotate += 2;
   }
}