import Sprinte from '../../components/game/sprinte';
import Interaction from './interaction';
import IAnimation from './structure/IAnimation';
import Explosion from './explosion';
import Shot from './shot';
import { DIRACTION } from './structure/diraction';
import { GameConfigService } from 'src/app/services/game/game-config.service';

export default class Ship extends Sprinte implements IAnimation {

    waking: boolean = false;
    diraction = DIRACTION.UP
    speed: number = 6;
    rotate = 0;
    shoting = false;
    width = 30;
    height = 40;
    imunne = true;
    timeInumme = 0;
    constructor(context: any, private interations: Interaction, private gameConfig: GameConfigService) {
        super(context, 1, 1);
        this.interval = 60;
        this.x = 200;
        this.y = context.canvas.height - 40;
        this.StartPosition();
    }

    verifyDiraction(diraction: number) {
        return this.interations.keyPressed(diraction) && !this.waking &&
            !this.interations.keyPressed(DIRACTION.SPACE);
    }

    StartPosition() {
        this.diraction = DIRACTION.UP;
        this.rotate = 0;
        this.x = (this.context.canvas.width / 2) - this.width;
        this.y = (this.context.canvas.height / 2) - this.height;
        this.timeInumme = 0;
        this.imunne = true;
    }

    isWalking() {
        let walking = false;
        Object.keys(DIRACTION).forEach((el: string) => {
            const diraction = DIRACTION[el];
            if (this.verifyDiraction(diraction)) {
                walking = true;
                this.diraction = diraction;
            }
        });
        this.waking = walking;
    }

    addShot() {
        if (this.interations.keyPressed(DIRACTION.SPACE) && !this.shoting) {
            const shot = new Shot(this.context, this, this.gameConfig);
            shot.draw();
            this.gameConfig.config.frames.push(shot);
            this.shoting = true;
        } else if (!this.interations.keyPressed(DIRACTION.SPACE)) {
            this.shoting = false;
        }
    }

    update() {
        this.isWalking();
        this.addShot();
        if (this.verifyDiraction(DIRACTION.RIGHT)) {
            this.x += this.speed;
            this.rotate = 5;
        } else if (this.verifyDiraction(DIRACTION.LEFT)) {
            this.x -= this.speed;
            this.rotate = 15;
        } else if (this.verifyDiraction(DIRACTION.UP)) {
            this.y -= this.speed;
            this.rotate = 0;
        }
        else if (this.verifyDiraction(DIRACTION.DOWN)) {
            this.y += this.speed;
            this.rotate = 10;
        }
    }

    crossScreen() {
        if (this.x < 0) {
            this.x = this.context.canvas.width;
        } else if (this.x > this.context.canvas.width) {
            this.x = 0;
        } else if (this.y < 0) {
            this.y = this.context.canvas.height;
        } else if (this.y > this.context.canvas.height) {
            this.y = 0;
        }
    }

    conflite(conflitent: IAnimation) {
        if (this.imunne)
            return false;

        new Explosion(this.context, this.x, this.y, this.gameConfig);
        this.StartPosition();
        this.gameConfig.config.life--;
    }

    flashing() {
        this.timeInumme++;
        if (this.imunne && this.timeInumme < 150) {
            return (this.timeInumme % 15)
        }
        this.imunne = false;
        return false;
    }

    draw() {
        if (this.flashing())
            return false;

        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotate / Math.PI);
        this.crossScreen();
        this.context.drawImage(this.image, -15, -15, this.width, this.height);
        this.context.restore();
    }
}
