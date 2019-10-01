import Animation from './animation';
import Interaction from './interaction';
import Imagens from './imagens';
import Skill from './skills';
import Ship from './ship';

function resizeCanvas() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const canvas :any  = document.getElementById('canvas_sonic');
  canvas.setAttribute('width', w);
  canvas.setAttribute('height', h);
}


(function() {
      resizeCanvas();
      const canvas :any  = document.getElementById('canvas_sonic');
      const context :any = canvas.getContext('2d');

      const animation = new Animation(context, canvas);
      const interaction = new Interaction(document);
      const images = new Imagens(); 

      const java =  new Skill(context, interaction);
      const js =  new Skill(context, interaction);
      const ship = new Ship(context, interaction);

      images.addImage(java, 'java.png');
      images.addImage(js, 'js.png');
      images.addImage(ship, 'nave.png');

      animation.addSprint(java);
      animation.addSprint(js);
      animation.addSprint(ship);

      images.load(() => {
        animation.enable();
      });
})();
