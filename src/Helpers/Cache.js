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
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

export default class Cache {
  constructor(options) {
    this.options = $.extend(true, {
      maxEntries: null,
    }, options || {});

    this.cache = {};
    this.entries = 0;
  }

  set(key, value, maxAge) {
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.cache[key].setAt = new Date();
      this.cache[key].maxAge = maxAge || this.cache[key].maxAge;
    } else {
      if (this.options.maxEntries && this.entries >= this.options.maxEntries) {
        this.deleteOldestEntry();
      }

      this.cache[key] = {
        value,
        setAt: new Date(),
        maxAge,
      };

      this.entries += 1;
    }
  }

  get(key) {
    if (this.cache[key]) {
      const entry = this.cache[key];

      if (entry.maxAge && entry.maxAge <= Cache.ageOf(entry)) {
        this.deleteEntryByKey(key);
      }

      return entry.value;
    }

    return null;
  }

  deleteEntryByKey(key) {
    delete this.cache[key];

    if (this.entries > 0) {
      this.entries -= 1;
    }
  }

  deleteOldestEntry() {
    let keyOfOldestItem;
    let dateOfOldestItem;

    Object.keys(this.cache).forEach((key) => {
      if (!dateOfOldestItem || dateOfOldestItem > this.cache[key].setAt) {
        dateOfOldestItem = this.cache[key].setAt;
        keyOfOldestItem = key;
      }
    });

    if (keyOfOldestItem) {
      this.deleteEntryByKey(keyOfOldestItem);
    }
  }

  static ageOf(entry) {
    return Math.round((new Date() - entry.setAt) / 1000);
  }
}
