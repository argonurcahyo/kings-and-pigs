class Sprite {
    constructor({
        position,
        imageSrc
        // frameRate = 1,
        // animations,
        // frameBuffer = 2,
        // loop = true,
        // autoplay = true
    }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}