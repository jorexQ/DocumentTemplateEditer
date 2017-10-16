import * as path from 'path';
import {app, screen} from 'electron';


export interface WindowStateOption {
    height : number,
    width : number,
    isMaximize : boolean
}

export class WindowStateManager {};