import { Sprite, Animation } from "./systems/assets";
import { GameObject } from "./objects/objects";
import { sysDraw } from "./systems/draw";
import { PortableSpriteData, PortableSpriteSheet } from "./types/assetTypes";
import { sysInfo } from "./systems/info";



class Engine {
    scene: GameObject[]
    assets: {[id: string]: Sprite | Animation }
    constructor(){
        this.assets = {}
        this.scene = []
    }

    loop(timestamp: number = 0){
        sysInfo.update(timestamp)
        sysDraw.clearFrame()

        this.scene.forEach((obj: GameObject) => {
            obj.iFrameEntrance()
        })

        window.requestAnimationFrame(this.loop.bind(this));
    }

    loadSceneAssets(sceneAssetData: PortableSpriteData[] | PortableSpriteSheet[]){
        return new Promise<void>(async (resolve, reject) => {
            for (let asset of sceneAssetData){
                await this.loadAsset(asset)
            }
            resolve()
        })
    }

    private loadAsset(asset: PortableSpriteData | PortableSpriteSheet): Promise<void>{
        return new Promise((resolve, reject) => {
            let image = new Image()
            image.src = asset.source
            image.onload = () => {
                const assetObject = this.objectifyAsset(asset, image)
                if (assetObject instanceof Sprite || assetObject instanceof Animation){
                    this.assets[asset.name] = assetObject
                }
                resolve()
            }
        })
    }

    private objectifyAsset(asset: PortableSpriteData | PortableSpriteSheet, image: HTMLImageElement): Sprite | Animation | boolean {
        switch (asset.type) {
            case "Animation":
                let ani = asset as PortableSpriteSheet
                return new Animation(ani, image)
            
            case "Sprite":
                let spri = asset as PortableSpriteData
                return new Sprite(spri, image)
            
            default: 
                return false
        } 
    }
}


export {
    Engine
}