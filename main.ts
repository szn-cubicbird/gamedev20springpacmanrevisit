namespace SpriteKind {
    export const MagicBean = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MagicBean, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.magicWand.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.setImage(img`
. . . . . . . . . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . . . 5 5 5 5 5 5 5 5 5 . 
. . . . . . . 5 5 5 5 5 5 5 5 . 
. . . . . . . . . 5 5 5 5 5 5 . 
. . . . . . . . . 5 5 5 5 5 5 . 
. . . . . . . 5 5 5 5 5 5 5 5 . 
. . . . . . 5 5 5 5 5 5 5 5 5 . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pacman.setVelocity(-53, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 . . . 5 5 5 5 5 5 . 
. 5 5 5 . . . . . . . . 5 5 5 . 
. 5 5 . . . . . . . . . . 5 5 . 
. 5 5 . . . . . . . . . . 5 5 . 
. 5 . . . . . . . . . . . . 5 . 
. . . . . . . . . . . . . . . . 
`)
    pacman.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.magicWand.play()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    if (mySprite.vx > 0) {
        if (Math.percentChance(50)) {
            mySprite.setVelocity(0, -50)
        } else {
            mySprite.setVelocity(0, 50)
        }
    } else if (mySprite.vy < 0) {
        if (Math.percentChance(50)) {
            mySprite.setVelocity(-50, 0)
        } else {
            mySprite.setVelocity(50, 0)
        }
    } else if (mySprite.vx < 0) {
        if (Math.percentChance(50)) {
            mySprite.setVelocity(0, -50)
        } else {
            mySprite.setVelocity(0, 50)
        }
    } else if (mySprite.vy > 0) {
        if (Math.percentChance(50)) {
            mySprite.setVelocity(-50, 0)
        } else {
            mySprite.setVelocity(50, 0)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 . . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 . 
. . . . . . . . . . . . . . . . 
`)
    pacman.setVelocity(50, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 . . . . . . . . . . . . 5 . 
. 5 5 . . . . . . . . . . 5 5 . 
. 5 5 . . . . . . . . . . 5 5 . 
. 5 5 5 . . . . . . . . 5 5 5 . 
. 5 5 5 5 . . . . . . 5 5 5 5 . 
. 5 5 5 5 5 . . . . 5 5 5 5 5 . 
. 5 5 5 5 5 5 . . 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pacman.setVelocity(0, -48)
})
let magicBeanSprite: Sprite = null
let beanSprite: Sprite = null
let mySprite: Sprite = null
let pacman: Sprite = null
info.setLife(3)
scene.setTileMap(img`
. f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. f e e e e e e e e f e e e e e e e e f . . . . . . . . . . . . 
. f 3 f f e f f f e f e f f f e f f 3 f . . . . . . . . . . . . 
. f e e e e e e e e e e e e e e e e e f . . . . . . . . . . . . 
. f e f f e f e f f f f f e f e f f e f . . . . . . . . . . . . 
. f e e e e f e e e f e e e f e e e e f . . . . . . . . . . . . 
. f f f f e f f f . f . f f f e f f f f . . . . . . . . . . . . 
. . . . f e f . . . . . . . f e f . . . . . . . . . . . . . . . 
f f f f f e f . f f d f f . f e f f f f f . . . . . . . . . . . 
. . . . . e . . f . . . f . . e . . . . . . . . . . . . . . . . 
f f f f f e f . f f f f f . f e f f f f f . . . . . . . . . . . 
. . . . f e f . . . . . . . f e f . . . . . . . . . . . . . . . 
. f f f f e f . f f f f f . f e f f f f . . . . . . . . . . . . 
. f e e e e e e e e f e e e e e e e e f . . . . . . . . . . . . 
. f e f f e f f f e f e f f f e f f e f . . . . . . . . . . . . 
. f e e f e e e e e e e e e e e f e e f . . . . . . . . . . . . 
. f f e f e f e f f f f f e f e f e f f . . . . . . . . . . . . 
. f 3 e e e f e e e f e e e f e e e 3 f . . . . . . . . . . . . 
. f e f f f f f f e f e f f f f f f e f . . . . . . . . . . . . 
. f e e e e e e e e e e e e e e e e e f . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
scene.setTile(15, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(14, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
pacman = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 . . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. . 5 5 5 5 5 5 5 5 . . . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 7))
mySprite.setVelocity(50, 0)
let startTile = scene.getTile(10, 15)
startTile.place(pacman)
scene.cameraFollowSprite(pacman)
let emptyTileList = scene.getTilesByType(14)
for (let value of emptyTileList) {
    beanSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    value.place(beanSprite)
}
let magicBeanTiles = scene.getTilesByType(3)
for (let value of magicBeanTiles) {
    magicBeanSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.MagicBean)
    value.place(magicBeanSprite)
}
