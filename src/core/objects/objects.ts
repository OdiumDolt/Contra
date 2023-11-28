import { v4 as uuid} from 'uuid'
import { Module } from '../modules/module'


// Template GameObject
class GameObject {
    x: number
    y: number
    id: string
    modules: {[id: string]: Module}
    constructor(
        x: number,
        y: number
    ){
        this.x = x
        this.y = y
        this.id = uuid()
        this.modules = {}
        this.initialize()
    }

    // Add a new module to a GameObject
    addModule(newModule: Module){
        if (this.findModule(newModule.name)){
            console.warn("Attempted to apply duplicate module " + newModule.name + " to object " + this.id)
            return false
        }
        newModule.parentObject = this
        this.modules[newModule.name] = newModule
        this.updateModuleRequirements()
    }

    // Check that all modules requriements are met
    updateModuleRequirements(): void{
        Object.entries(this.modules).forEach(([, mod]) => {
            for (let req of mod.requirements){
                if(this.findModule(req)){
                    continue
                }

                // if a modules requirements do not exist, set its status to false,
                // and skip to the next iteration of Object.entries(this.modules).forEach
                mod.status = false
                return false
            }
            mod.status = true
            return true
        })
    }

    // check if a module exists on a GameObject
    findModule(name: string): boolean{
        if(this.modules[name] == undefined){
            return false
        }
        return true
    }

    // get a requested module
    getModule(name: string): Module | boolean {
        if(this.modules[name] == undefined){
            return false
        }
        return this.modules[name]
    }

    // public entrance for iFrame function
    iFrameEntrance(){
        this.iFrame()
    }

    // internal frame update
    private iFrame(): boolean {
        
        Object.entries(this.modules).forEach(([, mod]) => {
            mod.frame()
        })

        this.frame()
        return true
    }

    // user defined per frame update
    frame(): void { 
    }

    // user defined on object intialize funtion
    initialize(): void { }
}

export {
    GameObject
}