import Animation from './animation';
import Interaction from './interaction';
import Skill from './skills';
import Ship from './ship';

function resizeCanvas() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const canvas :any  = document.getElementById('canvas_sonic');
  canvas.setAttribute('width', w);
  canvas.setAttribute('height', h);
}

const skills = [
  {imagePath: 'java.png'},
  {imagePath: 'js.png'},
  {imagePath: 'github.png'}
];


(function() {
      resizeCanvas();
      const canvas :any  = document.getElementById('canvas_sonic');
      const context :any = canvas.getContext('2d');

      const animation = new Animation(context, canvas);
      const interaction = new Interaction(document);
      const ship = new Ship(context, interaction, animation);

       animation.addSprintAndImg(ship, 'nave.png');

       skills.forEach(skill => {
        const s =  new Skill(context, interaction, animation);
        animation.addSprintAndImg(s, skill.imagePath);
       });

      animation.images.load(() => {
        animation.enable();
      });
})();
