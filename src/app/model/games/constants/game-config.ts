import IAnimation from '../structure/IAnimation';

export default class GameConfig {
    level = 1;
    life = 3;
    isEnabled = false;
    frames: Array<IAnimation> = [];
    skills = [
        { imagePath: 'assets/imgs/java.png' },
        { imagePath: 'assets/imgs/js.png' },
        { imagePath: 'assets/imgs/github.png' }
    ];
    score = 0;
    ship =  { imagePath: 'assets/imgs/nave.png' };
}
