import { Module } from "./module";

class Hitbox extends Module {
    x: number
    y: number
    width: number
    height: number
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
    ){
        super()   
        this.name = "Hitbox"     
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}


export {
    Hitbox
}