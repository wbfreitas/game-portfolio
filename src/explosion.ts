import IAnimation from './IAnimation';


function randInt(min: number, max: number, positive: boolean) {

    let num;
    if (positive === false) {
        num = Math.floor(Math.random() * max) - min;
        num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    } else {
        num = Math.floor(Math.random() * max) + min;
    }

    return num;

}

class Particle implements IAnimation {
    xv: number;
    yv: number;
    size: number;
    r: number;
    g: string;
    b: number;
    particlesMinSpeed = 3;
    particlesMaxSpeed = 6;
    particlesMinSize = 1;
    particlesMaxSize = 3;
    x =0;
    y =0;
    width = 0;
    height = 0;
    type = 'particula';
    constructor(x: number,  y: number, private context: any) {
        this.x = x;
        this.x = y;
        this.xv = randInt(this.particlesMinSpeed, this.particlesMaxSpeed, false);
        this.yv = randInt(this.particlesMinSpeed, this.particlesMaxSpeed, false);
        this.size = randInt(this.particlesMinSize, this.particlesMaxSize, true);
        this.r = randInt(113, 222, false);
        this.g = '00';
        this.b = randInt(105, 255, false);
    }

    draw() {
        const particlesAfterRemoval = this.particles.slice();
        const ctx = this.context;
        for (let ii = 0; ii < this.particles.length; ii++) {

            const particle = this.particles[ii];

            if (particle.size <= 0) {
                particlesAfterRemoval.splice(ii, 1);
                continue;
            }

            ctx.fillStyle = 'red';
            ctx.fillRect(particle.x, particle.y, 20, 20);

            particle.x += particle.xv;
            particle.y += particle.yv;
            particle.size -= .1;

        }
        this.particles = particlesAfterRemoval;
    }

    update() {

    }

    conflite() {

    }
}

export default class Explosion {

    type = 'explosion';
    width = 30;
    height = 40;
    x = 20;
    y = 20;
    xv: number;
    yv: number;
    size: number;
    background = '#333';
    particlesPerExplosion = 20;
    now: any;
    then = new Date();
    particles: Array<any> = [];
    constructor(private context: any, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.explosion();
    }

    explosion() {
        this.particles = [];

        for (let i = 0; i < this.particlesPerExplosion; i++) {
            this.particles.push(
                new Particle(this.x, this.y)
            );
        }
    }



}
