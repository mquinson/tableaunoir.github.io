import { DrawingCanvas } from './DrawingCanvas';
import { BackgroundTexture } from './BackgroundTexture';
import { OptionManager } from './OptionManager';
import { BoardManager } from './boardManager';
import { Layout } from './Layout';
import { ActionFreeDraw } from './ActionFreeDraw';


/**
 * general drawing class
 */
export class Drawing extends DrawingCanvas {

    static lineWidth: number;


    static init(): void {
        OptionManager.number({
            name: "lineWidth",
            defaultValue: 1.5,
            onChange: (lineWidth) => this.lineWidth = lineWidth
        });
    }


    static divideScreen(userid: string, x: number): void {
        console.log("divide the screen")
        const action = new ActionFreeDraw(userid);
        action.addPoint({ x: x, y: 0, pressure: 1, color: BackgroundTexture.getDefaultChalkColor() });
        action.addPoint({ x: x, y: Layout.getWindowHeight(), pressure: 1, color: BackgroundTexture.getDefaultChalkColor() });
        action.redo();
        BoardManager.addAction(action);
    }

    /**
     * 
     * @param nbMilleSeconds 
     * @returns a promise resolved after nbMilleSeconds milliseconds. Useful for making pause in a drawing process
     */
    static delay(nbMilleSeconds: number): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(resolve, nbMilleSeconds);
        });
    }

}
