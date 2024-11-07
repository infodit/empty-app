function CreateCanvas(width: number,heigth: number):HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = heigth

    return canvas
}

function GetContext(canvas:HTMLCanvasElement):CanvasRenderingContext2D {
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    return context
}