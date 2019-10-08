import IAnimation from '../../model/games/structure/IAnimation';
import {Particle} from '../../model/games/explosion';
import { GameConfigService } from 'src/app/services/game/game-config.service';

class Animation {
    constructor(private context: CanvasRenderingContext2D, public gameConfig: GameConfigService) {
    }

    cleanScreen() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    nextFrame() {
        if (!this.gameConfig.config.isEnabled) return;

        this.cleanScreen();
        this.gameConfig.config.frames.forEach(frame => {
            frame.update();
        });
        this.gameConfig.config.frames.forEach(frame => {
            frame.draw();
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
        this.gameConfig.config.frames.forEach((a: IAnimation) => {
            this.gameConfig.config.frames.forEach((b: IAnimation) => {
                if (a != b && this.bum(a, b) && !(a instanceof Particle) && !(b instanceof Particle)) {
                    a.conflite(b);
                    b.conflite(a);
                }
            });
        });
    }
}

export default Animation;
