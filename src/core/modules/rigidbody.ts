import { Module } from "./module";

class RigidBody extends Module {
    constructor(
    ){
        super()
        this.name = "RigidBody"
        this.requirements.push(
            "Hitbox", "Slime"
        )
        
    }
}

export {
    RigidBody
}