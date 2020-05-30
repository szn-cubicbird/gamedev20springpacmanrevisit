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
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.magicWand.play()
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
})
let magicBeanSprite: Sprite = null
let beanSprite: Sprite = null
let pacman: Sprite = null
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
