import Animation from './animation';
import Interaction from './entity/interaction';
import Skill from './entity/skills';
import Ship from './entity/ship';

function resizeCanvas(canvas: HTMLCanvasElement) {
  const w: number = window.innerWidth;
  const h: number = window.innerHeight;
  canvas.setAttribute('width', w.toString());
  canvas.setAttribute('height', h.toString());
}

const skills = [
  {imagePath: 'java.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'js.png'},
  {imagePath: 'github.png'}
];


(function() {
      const canvas = document.getElementById('canvas_sonic') as HTMLCanvasElement;
      resizeCanvas(canvas);
      const context: CanvasRenderingContext2D  = canvas.getContext('2d');

      const animation = new Animation(context, canvas);
      const interaction = new Interaction(document);
      const ship = new Ship(context, interaction, animation);

       animation.addSprintAndImg(ship, 'nave.png');

       skills.forEach(skill  => {
        const s =  new Skill(context, interaction, animation);
        animation.addSprintAndImg(s, skill.imagePath);
       });
       animation.nextFrame();

      animation.images.load(() => {
        animation.enable();
      });
})();
