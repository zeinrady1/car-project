radio.onReceivedValue(function (name, value) {
    let y = 0
    if (name == "x") {
        let speed = 0
        jx = value
        if (jx > 500 && jx < 525) {
            jx = 512
        }
        x = Math.map(jx, 0, 1023, 0 - speed, speed)
    }
    if (0 == y) {
        jy = value
        if (name == "x") {
        	
        }
    }
    serial.writeValue(name, value)
})
let jy = 0
let x = 0
let jx = 0
radio.setGroup(1)
radio.setFrequencyBand(1)
