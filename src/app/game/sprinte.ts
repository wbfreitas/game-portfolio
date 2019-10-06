export default class Sprinte {
   lastTime: number;
   interval: number;
   x: number;
   y: number;
   column: number = 0;
   line: number = 0;
   image = new Image();
   imageWidth = 0;
   imageHeiht = 0;
   constructor(protected context: any, protected linesNum: any, protected columnsNum: any) {
   }

   setImage(image: any) {
      this.image = image;
   }

   nextFrame() {
      const now = new Date().getTime();

      if (!this.lastTime) this.lastTime = now;

      if (now - this.lastTime < this.interval) return;

      if (this.column < this.columnsNum - 1)
         this.column++;
      else
         this.column = 0;

      this.lastTime = now;
   }


   draw() {
      const width = this.imageWidth;
      const height = this.imageHeiht;
      this.context.drawImage(
         this.image,
         width * this.column,
         height * this.line,
         width,
         height,
         this.x,
         this.y,
         width,
         height);
   }
}
