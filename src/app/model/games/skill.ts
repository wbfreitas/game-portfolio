import Sprinte from '../../components/game/sprinte';
import Interaction from '../../services/interaction.service';
import IAnimation from './structure/ianimation';
import Explosion from './explosion';
import Shot from './shot';
import { GameConfigService } from 'src/app/services/game/game-config.service';
import InteractionService from '../../services/interaction.service';

export default class Skill extends Sprinte implements IAnimation {
    private speed: number = 0.2;
    private speedX: number = 0.2;
    private speedY: number = 0.2;
    private rotate = 0;
    width = 30;
    height = 30;
    private rotateSpeed = 2;
    interations: InteractionService;
    constructor(context: any, private gameConfig: GameConfigService) {
        super(context, 1, 1);
        this.interations = gameConfig.interactions;
        this.interval = 60;
        this.nextLevel();
        this.positionRandom();
        if (Math.floor(Math.random() * (2))) {
            this.changeDiraction();
        }
    }

    setClickImage() {
        this.image.addEventListener('click', console.log);
    }

    positionRandom() {
        this.x = Math.floor(Math.random() * this.context.canvas.width) + 1;;
        this.y = Math.floor(Math.random() * this.context.canvas.height) + 1;;
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

    nextLevel() {
        this.gameConfig.getLevel().subscribe(level => {
            this.speedY = this.speed * level;
            this.speedX = this.speed * level;
            this.positionRandom();
        });
    }

    conflite(conflitent: IAnimation) {
        if (conflitent instanceof Shot) {
            new Explosion(this.context, this.x, this.y, this.gameConfig);
            this.gameConfig.removeEnemy(this);
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
