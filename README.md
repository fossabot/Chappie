<img src="https://cdn.rawgit.com/CosasDePuma/Chappie/563772d7/.img/icon.png" align="right" width="300">

# Peral
[![NodeJS Version](https://img.shields.io/badge/nodejs-8.9.4-yellowgreen.svg?style=flat)](https://nodejs.org/es/download/package-manager/) [![Electron](https://img.shields.io/badge/electron-1.8.4-7991de.svg?style=flat)](https://electronjs.org/) [![TMI.js](https://img.shields.io/badge/tmi.js-1.2.1-7454af.svg?style=flat)](https://electronjs.org/) ![Made with Love](https://img.shields.io/badge/made%20with-<3-red.svg?style=flat) [![License](https://img.shields.io/github/license/CosasDePuma/Peral.svg)](https://github.com/CosasDePuma/Peral/blob/master/LICENSE)

:vhs: Clone me!
----
Clone or download the Github project:
```bash
git clone https://github.com/cosasdepuma/chappie.git Chappie
```

:electric_plug: Dependencies
----
Enter to the directory:
```sh
cd Chappie
```

Install all the npm modules:
```js
npm install
```

:see_no_evil: Run the program!
----
Run the application through NodeJS:
```sh
npm start
```

You can also install Electron globally on your computer through the command `npm install -g electron` and running the program with:
```js
electron .
```

:hammer: Compilation
----
You can create an executable according to your Operating System by installing and running `electron-packager` module:

```js
npm install --save-dev electron-packager
npm run-script build
```

:hamster: Pets and more Pets!
----
If you want to change the default pet, you should download three GIFs like this and rename it to **[animal]_[action].gif**

| panda_idle.gif | panda_attack.gif | panda_greetings.gif |
|:--:|:--:|:--:|
| ![Panda Idle](https://cdn.rawgit.com/CosasDePuma/Chappie/821bea83/public/gif/panda_idle.gif) | ![Panda Attack](https://cdn.rawgit.com/CosasDePuma/Chappie/821bea83/public/gif/panda_attack.gif) | ![Panda Greetings](https://cdn.rawgit.com/CosasDePuma/Chappie/821bea83/public/gif/panda_greetings.gif) |

GIFs must be deposited in the `public/gif` folder.
Current actions available are: **IDLE**, **ATTACK**, **GREETINGS**

Finally, line `pet.js:7` must be changed with your animal name:
```js
var animal = "animal_name"
```

:earth_africa: Scheme of contents

```js
Chappie
|_ public
  |_ gif
  |_ ttf
|_ main.js
|_ pet.js
|_ pet.html
|_ package.json
```

Please contact with [Kike Puma](https://linkedin.com/in/kikepuma) if you need more information.
