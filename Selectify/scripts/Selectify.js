'use strict';

var _Disguiser = require('./Disguiser/Disguiser');

var _Disguiser2 = _interopRequireDefault(_Disguiser);

var _Events = require('./Events/Events');

var _Events2 = _interopRequireDefault(_Events);

var _Helpers = require('./Helpers/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.jQuery = $; /*
                              _           _   _  __
                             | |         | | (_)/ _|
                     ___  ___| | ___  ___| |_ _| |_ _   _
                    / __|/ _ \ |/ _ \/ __| __| |  _| | | |
                    \__ \  __/ |  __/ (__| |_| | | | |_| |
                    |___/\___|_|\___|\___|\__|_|_|  \__, |
                                                     __/ |
                                                    |___/
                   
                     Description: Initiates this worthless plugin.
                     Version: 1.0.1
                     License: WTFPL
                      Author: CFK <cradexco@gmail.com>
                        Repo: https://github.com/cfkarakulak/SelectifyJS
                   */

/* eslint-disable no-unused-vars */
/* eslint no-param-reassign: "error" */
/* eslint func-names: ["error", "never"] */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
})(function ($) {
  $.fn.selectify = function (args) {
    var events = new _Events2.default();

    events.add({
      element: '.selectify > button',
      event: 'click',
      handler: events.toggleButton
    });

    events.add({
      element: '.selectify .options ul > li[data-option]',
      event: 'click',
      handler: events.selectItem
    });

    events.add({
      element: '.selectify .filter > input[type=\'text\']',
      event: 'input',
      handler: events.filterItem
    });

    events.add({
      element: '.selectify',
      event: 'keydown',
      handler: events.moveCurrent
    });

    events.add({
      event: 'keyup',
      handler: events.registerShortcuts
    });

    events.add({
      event: 'click',
      handler: events.revertState
    });

    return this.each(function (i, el) {
      if (!$.data(el, 'selectifyJS')) {
        $.data(el, 'selectifyJS', new _Disguiser2.default(el, args));
      }
    });
  };
});