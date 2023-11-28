import { v4 as uuid} from 'uuid'
import { GameObject } from '../objects/objects'

class Module {
    name: string
    id: string
    requirements: string[]
    parentObject: GameObject | null
    status: boolean
    constructor(
    ){
        this.name = "Module"
        this.parentObject = null
        this.id = uuid(),
        this.status = true
        this.requirements = []
    }
    frame(){

    }
    parentObjectCheck(obj: GameObject | null): obj is GameObject{
        return obj !== null
    }
}

export { 
    Module 
}