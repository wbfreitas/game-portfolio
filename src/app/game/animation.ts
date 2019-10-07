import Imagens from './structure/imagens';
import IAnimation from './structure/IAnimation';
import {Particle} from './entity/explosion';

class Animation {
    sprintes: Array<IAnimation> = [];
    isEnable: boolean = false;
    images = new Imagens();
    constructor(private context: CanvasRenderingContext2D, public config: any) {
    }

    addSprintAndImg(sprinte: IAnimation, imagePahth: string) {
        this.images.addImage(sprinte, imagePahth);
        this.addSprint(sprinte);
    }

    removeSprinte(sprinte: IAnimation) {
        const index = this.sprintes.indexOf(sprinte);
        this.sprintes.splice(index, 1);
    }

    addSprint(sprinte: IAnimation) {
        this.sprintes.push(sprinte);
    }

    enable() {
        this.isEnable = true;
    }

    disable() {
        this.isEnable = false;
    }

    cleanScreen() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    nextFrame() {
        if (!this.isEnable) return;

        this.cleanScreen();
        this.sprintes.forEach(sprint => {
            sprint.update();
        });
        this.sprintes.forEach(sprint => {
            sprint.draw();
        });
        this.managerConflictors();
        requestAnimationFrame(() => this.nextFrame());
    }

    bum(a: IAnimation, b: IAnimation) {
        return (a.x + a.width) > b.x &&
            a.x < (b.x + b.width) &&
            (a.y + a.height) > b.y &&
            a.y < (b.y + b.height);
    }

    managerConflictors() {
        this.sprintes.forEach((a: IAnimation) => {
            this.sprintes.forEach((b: IAnimation) => {
                if (a != b && this.bum(a, b) && !(a instanceof Particle) && !(b instanceof Particle)) {
                    a.conflite(b);
                    b.conflite(a);
                }
            });
        });
    }
}

export default Animation;
