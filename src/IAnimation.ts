export default interface IAnimation {
    width :number;
    height :number;
    x: number;
    y: number;
    update() :void;
    draw() :void;
}