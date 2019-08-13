'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerShortcuts;
/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Adds ESC and ENTER support for noobs.
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

function registerShortcuts($self, event) {
  if (event.keyCode === 13) {
    $('.selectify.active li[data-option].active').click();
  }

  if (event.keyCode === 27) {
    $('.selectify').removeClass('active');
  }
}