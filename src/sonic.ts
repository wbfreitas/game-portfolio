import Sprinte from './sprinte';
import Interaction from './interaction';
import IAnimation from './IAnimation';

enum DIRACTION {
    RIGHT = 39,
    LEFT = 37
}

const linesNum = 3;
const columnsNum = 8;
export default class Sonic extends Sprinte implements IAnimation {
    waking: boolean = false;
    diraction = DIRACTION.RIGHT
    speed: number = 10;
    constructor(context: any, private interations: Interaction) {
        super(context, linesNum, columnsNum);
        this.interval = 60;
        this.x = 0;
        this.y = 200;
    }

    update() {
        if (this.interations.keyPressed(DIRACTION.RIGHT)) {
            if (!this.waking || this.diraction != DIRACTION.RIGHT) {
                this.line = 1;
                this.column = 0;
            }
            this.waking = true;
            this.diraction = DIRACTION.RIGHT;

            this.nextFrame();
            this.x += this.speed;
        } else if (this.interations.keyPressed(DIRACTION.LEFT)) {
            if (!this.waking || this.diraction != DIRACTION.LEFT) {
                this.line = 2;
                this.column = 0;
            }

            this.waking = true;
            this.diraction = DIRACTION.LEFT;
            this.nextFrame();
            this.x -= this.speed;
        } else {
            if (this.diraction == DIRACTION.RIGHT)
                this.column = 0;
            else if (this.diraction == DIRACTION.LEFT)
                this.column = 1;

            this.line = 0;
            this.waking = false;
        }
    }
}
