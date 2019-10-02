import Imagens from './imagens';
import IAnimation from './IAnimation';

class Animation {
    sprintes: Array<any> = [];
    isEnable: boolean = true;
    images = new Imagens();
    vez = 0;
    constructor(private context: any, private canvas: any) {
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

    bum(a: IAnimation, b: IAnimation) {
        return (a.x + a.width) > b.x &&
            a.x < (b.x + b.width) &&
            (a.y + a.height) > b.y &&
            a.y < (b.y + b.height);
    }

    managerConflictors() {
        this.sprintes.forEach(a => {
            this.sprintes.forEach(b => {
                if (a != b && this.bum(a, b)) {
                }
            });
        });
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
}
export default Animation;
