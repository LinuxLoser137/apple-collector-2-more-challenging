/**
 * What is different than the beginner version?
 * 
 * Challenge One:
 * 
 * -Added a countdown timer
 * 
 * Challenge Two:
 * 
 * -Added Text
 */
/**
 * <--- Splash displays a pop-up message
 * 
 * join takes text A and text B and joins them into one piece of text.
 */
// Add score when player overlaps with apple
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player3, food) {
    info.changeScoreBy(1)
    food.destroy()
})
// What happens at end of countdown
info.onCountdownEnd(function () {
    game.splash("Time's up!", "You collected " + info.score() + " apples!")
    game.over(true, effects.confetti)
})
/**
 * To Do List
 * 
 * -Create background and player
 * 
 * -Create apples
 * 
 * -Make apples collectible
 * 
 * -Add a countdown timer
 * 
 * -End the game
 * 
 * *Hint: Use "splash" and "join" to incorporate a message
 */
/**
 * <-- Creates a countdown
 */
let apple2: Sprite = null
let apple: Sprite
scene.setBackgroundColor(7)
// Create player sprite using inline image
let player2 = sprites.create(assets.image`Collector`, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
player2.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
// Countdown timer
info.startCountdown(30)
// Spawn apples every 1.5 seconds
game.onUpdateInterval(1500, function () {
    apple2 = sprites.create(assets.image`Apple`, SpriteKind.Food)
    apple2.setPosition(randint(10, 150), randint(10, 110))
})
