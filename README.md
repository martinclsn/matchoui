# matchostat app

## How to get started
- Follow instructions in [Hybrid](https://github.com/martinclsn/hybrid) to install npm, bower and gulp
- ```git clone <matchoui>```
- ```cd matchoui/webapp```
- Only once:
 - ```npm install```
 - ```bower install```
- Run application in your default browser:
 - ```gulp watch```

### Run in emulator
- ```cd matchoui/webapp```
- ```gulp build```
- ```cd ..```
- ```cordova platform add <platform>```
- ```cordova build <platform>```
- ```cordova emulate <platform>```

Where ```<platform>``` is one of 'ios' and 'android'  

### Run on device
- ```cordova run <platform> [--device=<android-device-code>]```
 - Get the device code for android by running ```adb device```

