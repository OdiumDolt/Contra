import './style.css'
import { Engine } from './core/engine.ts'
import { index } from './game/main/index.ts'

let engine = new Engine()

index(engine)
