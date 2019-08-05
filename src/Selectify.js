/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Initiates this worthless plugin.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

/* eslint-disable no-unused-vars */
/* eslint no-param-reassign: "error" */
/* eslint func-names: ["error", "never"] */

import Disguiser from './Disguiser/Disguiser';
import Events from './Events/Events';
import Helpers from './Helpers/Helpers';

window.jQuery = $;

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(($) => {
  $.fn.Selectify = function (args) {
    const events = new Events();

    events.add({
      element: '.selectify > button',
      event: 'click',
      handler: events.toggleButton,
    });

    events.add({
      element: '.selectify .options ul > li[data-option]',
      event: 'click',
      handler: events.selectItem,
    });

    events.add({
      element: '.selectify .filter > input[type=\'text\']',
      event: 'input',
      handler: events.filterItem,
    });

    events.add({
      element: '.selectify',
      event: 'keydown',
      handler: events.moveCurrent,
    });

    events.add({
      event: 'keyup',
      handler: events.shortcutSupport,
    });

    events.add({
      event: 'click',
      handler: events.revertState,
    });

    return this.each((i, el) => {
      if (!$.data(el, 'Selectify')) {
        $.data(el, 'Selectify', new Disguiser(el, args));
      }
    });
  };
}));
