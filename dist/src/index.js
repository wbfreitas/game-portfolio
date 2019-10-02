import Animation from './animation';
import Interaction from './interaction';
import Skill from './skills';
import Ship from './ship';
function resizeCanvas() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canvas = document.getElementById('canvas_sonic');
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
}
var skills = [
    { imagePath: 'java.png' },
    { imagePath: 'js.png' },
    { imagePath: 'github.png' }
];
(function () {
    resizeCanvas();
    var canvas = document.getElementById('canvas_sonic');
    var context = canvas.getContext('2d');
    var animation = new Animation(context, canvas);
    var interaction = new Interaction(document);
    var ship = new Ship(context, interaction, animation);
    animation.addSprint(ship, 'nave.png');
    skills.forEach(function (skill) {
        var s = new Skill(context, interaction);
        animation.addSprint(s, skill.imagePath);
    });
    animation.images.load(function () {
        animation.enable();
    });
})();
//# sourceMappingURL=index.js.map