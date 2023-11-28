class SysDrawType {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    constructor(
    ){
        this.canvas = document.getElementById("game-body") as HTMLCanvasElement
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;
        // const scaleFactor = this.canvas.width / this.canvas.offsetWidth;
        this.ctx.scale(1, 1)
    }

    // draw(image: HTMLImageElement, x: number, y: number): void;
    // draw(image: HTMLImageElement, x: number, y: number, dw: number, dh: number): void;

    draw(
        image: HTMLImageElement, 
        x: number, 
        y: number,
        dw?: number,
        dh?: number,
        sx?: number,
        sy?: number,
        sw?: number,
        sh?: number
    ): boolean {
        // draw base image
        if (dw == undefined || dh == undefined){
            this.ctx.drawImage(image, x, y)   
            return true
        }
        // draw scaled image
        else if (sx == undefined || sy == undefined || sw == undefined || sh == undefined) {
            this.ctx.drawImage(image, x, y, dw, dh)
            return true
        }
        else {
            this.ctx.drawImage(image, sx, sy, sw, sh, x, y, dw, dh)
            return true
        }
    }
    clearFrame(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const sysDraw = new SysDrawType()

export {
    sysDraw,
    SysDrawType
}