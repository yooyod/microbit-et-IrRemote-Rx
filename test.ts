// tests go here; this will not be compiled when this package is used as an extension.

 
IR_RemoteRx.onIrButton(IrButton.Num1, IrButtonAction.Pressed, function () {
    basic.showString("1")
})
IR_RemoteRx.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    basic.showString("PWR")
})
IR_RemoteRx.onIrButton(IrButton.Num9, IrButtonAction.Pressed, function () {
    basic.showString("9")
})
basic.forever(function () {
    IR_RemoteRx.connectIrReceiver(DigitalPin.P8)
})
