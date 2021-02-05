
# Extention IR Remote Receive for ET-IR Remot Key

> Open this page at [https://yooyod.github.io/microbit-et-irremote-rx/](https://yooyod.github.io/microbit-et-irremote-rx/)


## Usage

```blocks

IR_RemoteRx.connectIrReceiver(DigitalPin.P8)
IR_RemoteRx.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    basic.showString("PWR")
})

```
## OR 
```blocks

IR_RemoteRx.connectIrReceiver(DigitalPin.P8)
IR_RemoteRx.onIrDatagram(function () {
    basic.showString(IR_RemoteRx.irDatagram())
})

})

```


## Examples

### Receive Remote Key and Show numberKey at math On Display

```blocks

IR_RemoteRx.connectIrReceiver(DigitalPin.P8)
IR_RemoteRx.onIrButton(IrButton.Num1, IrButtonAction.Pressed, function () {
    basic.showString("1")
})
IR_RemoteRx.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    basic.showString("PWR")
})
IR_RemoteRx.onIrButton(IrButton.Num9, IrButtonAction.Pressed, function () {
    basic.showString("9")
})

```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/stable#](https://makecode.microbit.org/stable#)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/yooyod/microbit-et-irremote-rx** and import

## Edit this project ![Build status badge](https://github.com/yooyod/microbit-et-irremote-rx/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/stable#](https://makecode.microbit.org/stable#)
* click on **Import** then click on **Import URL**
* paste **https://github.com/yooyod/microbit-et-irremote-rx** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
