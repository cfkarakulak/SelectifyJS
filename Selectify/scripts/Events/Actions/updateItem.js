'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateItem;

var _Helpers = require('../../Helpers/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateItem($element) {
  var $select = $element.closest('.selectify').children('select');

  if (_Helpers2.default.is($element, '[disabled]') === true) {
    return false;
  }

  if (_Helpers2.default.is($select, '[multiple]') === true) {
    var data = $select.find('option:selected').map(function () {
      return String(this.value);
    }).get();

    if ($element.hasClass('active') === false) {
      data.push(String($element.data('value')));
    }

    if ($element.hasClass('active') === true) {
      if (data.indexOf(String($element.data('value'))) > -1) {
        data.splice(data.indexOf(String($element.data('value'))), 1);
      }
    }

    $element.toggleClass('active');

    if (data.length > 0) {
      return $select.val(data).trigger('change').next('button').html($select.find('option:selected').map(function () {
        return '<u>' + $.trim($(this).html()) + '</u>';
      }).get());
    }

    if (data.length <= 0) {
      return $select.val(data).trigger('change').next('button').html('<em>' + $select.data('placeholder') + '</em>');
    }
  }

  if (_Helpers2.default.is($select, '[multiple]') === false) {
    $element.addClass('active');

    return $select.val($element.data('value')).trigger('change').next('button').html($.trim($element.data('value'))).next('.content').find('li[data-option].active').not($element).removeClass('active');
  }

  return false;
} /*
             _           _   _  __
            | |         | | (_)/ _|
    ___  ___| | ___  ___| |_ _| |_ _   _
   / __|/ _ \ |/ _ \/ __| __| |  _| | | |
   \__ \  __/ |  __/ (__| |_| | | | |_| |
   |___/\___|_|\___|\___|\__|_|_|  \__, |
                                    __/ |
                                   |___/
  
    Description: Update item, thats all.
    Version: 1.0.1
    License: WTFPL
     Author: CFK <cradexco@gmail.com>
       Repo: https://github.com/cfkarakulak/SelectifyJS
  */