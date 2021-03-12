input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    set_current_light = 0
})
let set_current_light = 0
basic.showIcon(IconNames.Heart)
