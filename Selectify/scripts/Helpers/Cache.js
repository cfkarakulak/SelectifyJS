"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Simple in-memory cache that i've stolen from someone.
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

var Cache = function () {
  function Cache(options) {
    _classCallCheck(this, Cache);

    this.options = $.extend(true, {
      maxEntries: null
    }, options || {});

    this.cache = {};
    this.entries = 0;
  }

  _createClass(Cache, [{
    key: "set",
    value: function set(key, value, maxAge) {
      if (this.cache[key]) {
        this.cache[key].value = value;
        this.cache[key].setAt = new Date();
        this.cache[key].maxAge = maxAge || this.cache[key].maxAge;
      } else {
        if (this.options.maxEntries && this.entries >= this.options.maxEntries) {
          this.deleteOldestEntry();
        }

        this.cache[key] = {
          value: value,
          setAt: new Date(),
          maxAge: maxAge
        };

        this.entries += 1;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      if (this.cache[key]) {
        var entry = this.cache[key];

        if (entry.maxAge && entry.maxAge <= Cache.ageOf(entry)) {
          this.deleteEntryByKey(key);
        }

        return entry.value;
      }

      return null;
    }
  }, {
    key: "deleteEntryByKey",
    value: function deleteEntryByKey(key) {
      delete this.cache[key];

      if (this.entries > 0) {
        this.entries -= 1;
      }
    }
  }, {
    key: "deleteOldestEntry",
    value: function deleteOldestEntry() {
      var _this = this;

      var keyOfOldestItem = void 0;
      var dateOfOldestItem = void 0;

      Object.keys(this.cache).forEach(function (key) {
        if (!dateOfOldestItem || dateOfOldestItem > _this.cache[key].setAt) {
          dateOfOldestItem = _this.cache[key].setAt;
          keyOfOldestItem = key;
        }
      });

      if (keyOfOldestItem) {
        this.deleteEntryByKey(keyOfOldestItem);
      }
    }
  }], [{
    key: "ageOf",
    value: function ageOf(entry) {
      return Math.round((new Date() - entry.setAt) / 1000);
    }
  }]);

  return Cache;
}();

exports.default = Cache;