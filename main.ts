let Switch_off = 0
let count = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        count = 0
        while (count < 600) {
            basic.pause(100)
            count += 1
            if (pins.digitalReadPin(DigitalPin.P1) == 1 || (pins.digitalReadPin(DigitalPin.P8) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1)) {
                Switch_off = 0
                count = 0
                while (Switch_off == 0) {
                    basic.showLeds(`
                        # . . . #
                        . . # . .
                        . # # # .
                        . . # . .
                        # . . . #
                        `)
                    if (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0)) {
                        basic.pause(100)
                        count += 1
                    }
                    if (pins.digitalReadPin(DigitalPin.P1) == 1 || (pins.digitalReadPin(DigitalPin.P8) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1)) {
                        count = 0
                    }
                    if (count == 600) {
                        count = 700
                        Switch_off = 1
                    }
                }
            }
        }
    }
})
