import { Engine } from "../../core/engine";
import { Hitbox } from "../../core/modules/hitbox";
import { GameObject } from "../../core/objects/objects";
import { AssetManager } from "../../core/modules/assetManager";
import * as assets from './assets.json'


async function index(engine: Engine){
    await engine.loadSceneAssets(
        (assets as any).default
    )
    
    const poop = new GameObject(0, 0)
    poop.addModule(new Hitbox(10, 10, 20, 20))
    
    const poopAssetManager = new AssetManager()
    poopAssetManager.addAsset(engine.assets["JohnRun"])
    poopAssetManager.addAsset(engine.assets["FrogColor"])
    poopAssetManager.show("JohnRun")
    poop.addModule(poopAssetManager)
    
    engine.scene.push(poop)
    engine.loop()
}

export { index }