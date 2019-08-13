'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectItem;

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

  Description: Select selected item by watching selection ?
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

function selectItem($self) {
  var $select = $self.closest('.selectify').children('select');

  if (_Helpers2.default.is($select, '[multiple]') === true) {
    return (0, _updateItem2.default)($self);
  }

  if (_Helpers2.default.is($select, '[multiple]') === false) {
    if ($self.hasClass('active') === true) {
      return $self.closest('.selectify').removeClass('active');
    }

    if ($self.hasClass('active') === false) {
      return (0, _updateItem2.default)($self).closest('.selectify').removeClass('active');
    }
  }

  return false;
}