class InfoType {
    frameRate: number
    deltaTime: number
    oldTimeStamp: number
    fps: number
    constructor(){
        this.frameRate = 0
        this.deltaTime = 0
        this.oldTimeStamp = 0
        this.deltaTime = 0
        this.fps = 0
    }
    update(
        newTimeStamp: number
    ){
        this.deltaTime = (newTimeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = newTimeStamp
        this.fps = 1/this.deltaTime
    }
}

const sysInfo = new InfoType()

export {
    sysInfo
}