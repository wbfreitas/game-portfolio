
export default class Imagens {
    imgs: Array<any> = [];
    loads: 0;
    addImage(iAnimation: any, path: string) {
      const image = new Image();
      image.src = path;
       iAnimation.setImage(image);
       this.imgs.push(image);
    } 

    load(callback: any) {
        this.imgs.forEach(img => {
            img.onload = () => {
               this.loads++; 
               if(this.loads == this.imgs.length) {
                   callback();
               }
            }
        });
    }
}