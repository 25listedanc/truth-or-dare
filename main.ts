input.onButtonPressed(Button.A, function () {
    Jon = randint(0, 1)
    if (Jon == 0) {
        basic.showString("TRUTH")
    } else {
        basic.showString("DARE")
    }
})
input.onButtonPressed(Button.B, function () {
    ARROW = randint(1, 8)
    if (ARROW == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (ARROW == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (ARROW == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (ARROW == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (ARROW == 5) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (ARROW == 6) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (ARROW == 7) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (ARROW == 8) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let ARROW = 0
let Jon = 0
basic.showString("TRUTH! OR DARE!")
