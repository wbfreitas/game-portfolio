export default interface IAnimation {
    type: string;
    width: number;
    height: number;
    x: number;
    y: number;
    update(): void;
    draw(): void;
    conflite(conflitent: IAnimation): void;
}