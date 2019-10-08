import IAnimation from './structure/ianimation';
import { GameConfigService } from 'src/app/services/game/game-config.service';

function randInt(min: number, max: number, positive: boolean) {

    let num;
    if (positive === false) {
        num = Math.floor(Math.random() * max) + min;
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    } else {
        num = Math.floor(Math.random() * max) + min;
    }

    return num;
}

function randColor(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Particle implements IAnimation {
    xv: number;
    yv: number;
    size: number;
    r: number;
    g: number;
    b: number;
    particlesMinSpeed = 1;
    particlesMaxSpeed = 4;
    particlesMinSize = 1;
    particlesMaxSize = 5;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    constructor(private context: CanvasRenderingContext2D, x: number, y: number, private gameConfig: GameConfigService) {
        this.x = x;
        this.y = y;
        this.xv = randInt(this.particlesMinSpeed, this.particlesMaxSpeed, false);
        this.yv = randInt(this.particlesMinSpeed, this.particlesMaxSpeed, false);
        this.size = randInt(this.particlesMinSize, this.particlesMaxSize, true);
        this.r = randColor(255, 255);
        this.g = randColor(255, 255);
        this.b = randColor(254, 255);
    }

    draw() {
        if (this.size < 0) {
            this.gameConfig.removeSprinte(this);
            return;
        }
        const ctx = this.context;

        this.context.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, Math.PI * 2, 0, false);
        ctx.closePath();
        ctx.fillStyle = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        ctx.fill();
        this.context.restore();
    }

    update() {
        this.x += this.xv;
        this.y += this.yv;
        this.size -= .1;

    }

    conflite(conflitent: IAnimation) {

    }
}

export default class Explosion {

    particlesPerExplosion = 15;
    constructor(private context: CanvasRenderingContext2D, private x: number, private y: number, private gameConfig :GameConfigService) {
        this.explosion();
    }

    explosion() {
        this.gameConfig.newSong(this.gameConfig.config.songs.explosion).play();
        for (let i = 0; i < this.particlesPerExplosion; i++) {
            this.gameConfig.config.frames.push(
                new Particle(this.context, this.x, this.y, this.gameConfig)
            )
        }
    }
}

