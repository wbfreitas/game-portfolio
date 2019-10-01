export default class Interaction {
    element: any;
    keyPress: any = {};
    actions: Array<any> = [];
    functionAction: Array<any> = [];

    constructor(element: any) {
        this.element = element;
        this.startEvent();
        this.stopEvent();
    }

    startEvent() {
        this.element.addEventListener('keydown', (env: any) => {
            const keyCode = env.keyCode;
            this.keyPress[keyCode] = true;
            this.actions[keyCode] = true;
        });

    }
    stopEvent() {
        this.element.addEventListener('keyup', (env: any) => {
             const keyCode = env.keyCode;
             this.keyPress[keyCode] = false;
             this.actions[keyCode] = false;
        });
    }

    keyPressed(key: any) {
        return this.keyPress[key];
    }

    callAction(key:any, callBack:Object) {
        this.functionAction[key] = callBack;
    } 
}