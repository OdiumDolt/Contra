import { Module } from "./module"
import { Asset, Sprite, Animation } from "../systems/assets"


class AssetManager extends Module {
    assets: {[id: string]: Asset}
    currentAsset: Asset | null
    constructor(){
        super()
        this.assets = {}
        this.currentAsset = null
    }
    
    show (asset: string){
        this.currentAsset = this.assets[asset]
    }
    
    play (asset: string){
        this.currentAsset = this.assets[asset]
    }

    hide(){
        this.currentAsset = null
    }
    
    frame(){
        if(this.parentObjectCheck(this.parentObject)){
            this.currentAsset?.frame(this.parentObject.x, this.parentObject.y)
        }
    }
    
    addAsset(asset: Sprite | Animation){
        this.assets[asset.name] = asset
    }
}

export {
    AssetManager,
}