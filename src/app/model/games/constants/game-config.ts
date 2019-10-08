import IAnimation from '../structure/IAnimation';

export default class GameConfig {
    life = 3;
    isEnabled = true;
    frames: Array<IAnimation> = [];
    skills = [
        { imagePath: 'assets/imgs/java.png' },
        { imagePath: 'assets/imgs/js.png' },
        { imagePath: 'assets/imgs/github.png' }
    ];
    songs = {
        shot:  'assets/songs/tiro.mp3',
        explosion: 'assets/songs/explosao.mp3'
    };
    score = 0;
    ship =  { imagePath: 'assets/imgs/nave.png' };

    constructor(public level: number) {

    }
}
