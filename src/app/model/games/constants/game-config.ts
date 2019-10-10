import IAnimation from '../structure/IAnimation';

export default class GameConfig {
    life = 3;
    isEnabled = true;
    frames: Array<IAnimation> = [];
    skills = [
        { imagePath: 'assets/imgs/java.png' },
        { imagePath: 'assets/imgs/js.png' },
        { imagePath: 'assets/imgs/github.png' },
        { imagePath: 'assets/imgs/spring-boot.svg' },
        { imagePath: 'assets/imgs/spring.png' },
        { imagePath: 'assets/imgs/angular.png' },
        { imagePath: 'assets/imgs/react.png' },
        { imagePath: 'assets/imgs/aws.jpg' },
        { imagePath: 'assets/imgs/docker.png' },
        { imagePath: 'assets/imgs/mongo.png' },
        { imagePath: 'assets/imgs/vim.png' },
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
