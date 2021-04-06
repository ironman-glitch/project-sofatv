Switch_off = 0
count = 0
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)

def on_forever():
    global count, Switch_off
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    if pins.digital_read_pin(DigitalPin.P11) == 1:
        count = 0
        while count < 600:
            basic.pause(100)
            count += 1
            if pins.digital_read_pin(DigitalPin.P1) == 1 or (pins.digital_read_pin(DigitalPin.P8) == 1 or pins.digital_read_pin(DigitalPin.P2) == 1):
                Switch_off = 0
                count = 0
                while Switch_off == 0:
                    basic.show_leds("""
                        # . . . #
                        . . # . .
                        . # # # .
                        . . # . .
                        # . . . #
                        """)
                    if pins.digital_read_pin(DigitalPin.P1) == 0 and (pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P1) == 0):
                        basic.pause(100)
                        count += 1
                    if pins.digital_read_pin(DigitalPin.P1) == 1 or (pins.digital_read_pin(DigitalPin.P8) == 1 or pins.digital_read_pin(DigitalPin.P2) == 1):
                        count = 0
                    if count == 600:
                        count = 700
                        Switch_off = 1
basic.forever(on_forever)
