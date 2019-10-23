import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export default class InteractionService {
    element: any;
    keyPress: any = {};
    actions: Array<any> = [];
    functionAction: Array<any> = [];
    diraction: number;
    private diraction$ = new Subject<any>();
    constructor() {
        this.element = document;
        this.startEvent();
        this.stopEvent();
    }


    getDiraction(): Observable<any> {
        return this.diraction$.asObservable();
    }

    changeDirqaction(diraction: number): void {
        this.diraction$.next(diraction);
    }


    addEvent(keyCode: number, status: boolean) {
        this.keyPress[keyCode] = status;
        this.actions[keyCode] = status;
    }

    startEvent() {
        this.element.addEventListener('keydown', (env: any) => {
            const keyCode = env.keyCode;
            this.addEvent(keyCode, true);
        });
    }

    stopEvent() {
        this.element.addEventListener('keyup', (env: any) => {
            const keyCode = env.keyCode;
            this.addEvent(keyCode, false);
        });
    }

    keyPressed(key: any) {
        return this.keyPress[key];
    }

    callAction(key: any, callBack: Object) {
        this.functionAction[key] = callBack;
    }
}
