import { PortableSpriteData, PortableSpriteSheet, Size } from "../types/assetTypes"
import { sysDraw } from "./draw"
import { sysInfo } from "./info"

class Asset {
    source: string
    name: string
    type: string
    image: HTMLImageElement
    dimensions: Size
    constructor(
        source: string,
        name: string,
        type: string,
        image: HTMLImageElement,
        dimensions: Size
    ){
        this.source = source
        this.name = name
        this.type = type
        this.image = image
        this.dimensions = dimensions
    }
    frame(x: number, y: number){ 
        
    }
}

class Sprite extends Asset {
    constructor(
        spri: PortableSpriteData,
        image: HTMLImageElement
    ){
        super(spri.source, spri.name, spri.type, image, spri.dimensions)
    }
    frame(x: number, y: number){
        sysDraw.draw(this.image, x, y, this.dimensions.x, this.dimensions.y)
    }
}

class Animation extends Asset {
    internalDeltatime: number
    frames: number
    fps: number
    gridSize: Size
    constructor(
        sheet: PortableSpriteSheet,
        image: HTMLImageElement
    ){
        super(sheet.source, sheet.name, sheet.type, image, sheet.dimensions)
        this.internalDeltatime = 0
        this.frames = sheet.frames
        this.fps = sheet.fps
        this.gridSize = sheet.gridSize
    }
    frame(x: number, y: number){
        let locMultiple = Math.floor(this.internalDeltatime * this.fps)
        if (locMultiple == this.frames) { 
            this.internalDeltatime = 0
            locMultiple = 0
        }
        
        sysDraw.draw(
            this.image,
            x,
            y,
            this.dimensions.x,
            this.dimensions.y,
            this.gridSize.x * (locMultiple),
            0,
            this.gridSize.x,
            this.gridSize.y
        )

        this.internalDeltatime += sysInfo.deltaTime
    }
}

export {
    Asset,
    Animation,
    Sprite
}