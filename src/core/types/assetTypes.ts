type PortableSpriteData = {
    source: string
    name: string
    dimensions: Size
    type: string
}

type PortableSpriteSheet = {
    type: string
    name: string
    source: string
    dimensions: Size
    frames: number
    fps: number
    gridSize: Size
}

type Size = {
    x: number
    y: number
}



export type {
    PortableSpriteData,
    PortableSpriteSheet,
    Size
}