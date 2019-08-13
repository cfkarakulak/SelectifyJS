'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                _           _   _  __
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | |         | | (_)/ _|
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ___  ___| | ___  ___| |_ _| |_ _   _
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      / __|/ _ \ |/ _ \/ __| __| |  _| | | |
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      \__ \  __/ |  __/ (__| |_| | | | |_| |
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |___/\___|_|\___|\___|\__|_|_|  \__, |
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       __/ |
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |___/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Description: Bootstrap for event listeners and what not.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Version: 1.0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       License: WTFPL
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Author: CFK <cradexco@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Repo: https://github.com/cfkarakulak/SelectifyJS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _toggleButton2 = require('./Actions/toggleButton');

var _toggleButton3 = _interopRequireDefault(_toggleButton2);

var _selectItem2 = require('./Actions/selectItem');

var _selectItem3 = _interopRequireDefault(_selectItem2);

var _filterItem2 = require('./Actions/filterItem');

var _filterItem3 = _interopRequireDefault(_filterItem2);

var _moveCurrent2 = require('./Actions/moveCurrent');

var _moveCurrent3 = _interopRequireDefault(_moveCurrent2);

var _registerShortcuts2 = require('./Actions/registerShortcuts');

var _registerShortcuts3 = _interopRequireDefault(_registerShortcuts2);

var _revertState2 = require('./Actions/revertState');

var _revertState3 = _interopRequireDefault(_revertState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = function () {
  function Events() {
    _classCallCheck(this, Events);

    this.events = [];
  }

  _createClass(Events, [{
    key: 'add',
    value: function add(event) {
      if (event.element) {
        $(document).on(event.event, event.element, event.handler);
      }

      if (!event.element) {
        $(document).on(event.event, event.handler);
      }

      this.events.push(event);

      return this.events;
    }
  }, {
    key: 'toggleButton',
    value: function toggleButton(event) {
      return (0, _toggleButton3.default)($(this), event);
    }
  }, {
    key: 'selectItem',
    value: function selectItem(event) {
      return (0, _selectItem3.default)($(this), event);
    }
  }, {
    key: 'filterItem',
    value: function filterItem(event) {
      return (0, _filterItem3.default)($(this), event);
    }
  }, {
    key: 'moveCurrent',
    value: function moveCurrent(event) {
      return (0, _moveCurrent3.default)($(this), event);
    }
  }, {
    key: 'registerShortcuts',
    value: function registerShortcuts(event) {
      return (0, _registerShortcuts3.default)($(this), event);
    }
  }, {
    key: 'revertState',
    value: function revertState(event) {
      return (0, _revertState3.default)($(this), event);
    }
  }]);

  return Events;
}();

exports.default = Events;