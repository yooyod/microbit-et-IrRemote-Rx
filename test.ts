// tests go here; this will not be compiled when this package is used as an extension.
IR_RemoteRx.connectIrReceiver(DigitalPin.P8)
IR_RemoteRx.onIrButton(IrButton.Num5, IrButtonAction.Pressed, function () {
    
    basic.showNumber(5)
})