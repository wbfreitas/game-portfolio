import Imagens from './imagens';
import IAnimation from './IAnimation';

class Animation {
    sprintes: Array<any> = [];
    isEnable: boolean = true;
    images = new Imagens(); 
    constructor(private context:any, private canvas:any) {
    }

    addSprintAndImg(sprinte :IAnimation, imagePahth :string) { 
        this.images.addImage(sprinte, imagePahth);
        this.addSprint(sprinte);
    }

    addSprint(sprinte :IAnimation) { 
        this.sprintes.push(sprinte);
        this.nextFrame();
    }

    enable() {
        this.isEnable = true;
    }

    disable() {
        this.isEnable = false;
    }

    cleanScreen() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    nextFrame() {
        if(!this.isEnable) return;

        this.cleanScreen();
        this.sprintes.forEach(sprint => { 
            sprint.update();
        });
        this.sprintes.forEach(sprint => { 
            sprint.draw();
        });
        requestAnimationFrame(() => this.nextFrame());
    }
}
export default Animation;
