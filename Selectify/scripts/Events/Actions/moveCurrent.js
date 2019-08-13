'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveCurrent;

var _Helpers = require('../../Helpers/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _updateItem = require('./updateItem');

var _updateItem2 = _interopRequireDefault(_updateItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Moves current selection up and down.
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

function moveCurrent($self, event) {
  var $select = $self.closest('.selectify').children('select');
  var $options = $self.find('.options');
  var position = $options.find('li[data-option]:visible').index($options.find('li[data-option]:visible.active'));
  var $element = void 0;

  if (_Helpers2.default.is($select, '[multiple]') === true) {
    return true;
  }

  if ($self.hasClass('active') === false) {
    return false;
  }

  if (event.keyCode === 38) {
    if (position > 0) {
      $element = $options.find('li[data-option]:visible:eq(' + Number(position - 1) + ')');

      if ($element.length > 0) {
        (0, _updateItem2.default)($element);
      }
    }
  }

  if (event.keyCode === 40) {
    $element = $options.find('li[data-option]:visible:eq(' + Number(position + 1) + ')');

    if ($element.length > 0) {
      (0, _updateItem2.default)($element);
    }
  }

  if ($element && $options.find('li[data-option]:visible').index($element) >= 0) {
    var scrollTop = $element.closest('.options').scrollTop();
    var elementTop = ($options.find('li:visible').index($element) + 1) * $element.outerHeight();

    if (scrollTop + 240 < elementTop || scrollTop >= elementTop) {
      $element.closest('.options').animate({
        scrollTop: elementTop <= 80 ? 0 : elementTop - 1 * $element.outerHeight()
      }, 0);
    }
  }

  return true;
}