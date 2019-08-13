/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Disguise native select element.
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
     Todo: Cache function calls in .each
*/

import Defaults from './Defaults';
import Helpers from '../Helpers/Helpers';
import Cache from '../Helpers/Cache';

export default class Disguiser {
  constructor(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, Defaults, options);

    this.cache = new Cache();

    this.attributes = {
      html: '',
      value: this.element.val(),
    };

    this.dom = {
      button: null,
      options: null,
      list: null,
      filter: null,
    };

    return this.build().mark().initialize();
  }

  build() {
    this.element.addClass('hidden');

    if (Helpers.is(this.element, '[multiple]') === false) {
      this.element.wrap('<div class=\'selectify\'></div>');

      if (this.attributes.value.length > 0) {
        this.attributes.html = $.trim(this.element.find('option:selected').html());
      }

      if (this.attributes.value.length <= 0) {
        this.attributes.html = $.trim(this.element.find('option:eq(0)').html());
      }
    }

    if (Helpers.is(this.element, '[multiple]') === true) {
      this.element.wrap('<div class=\'selectify multiple\'></div>');

      if (this.attributes.value.length > 0) {
        this.attributes.html = this.element.find('option:selected').map(function () {
          return `<u>${$.trim($(this).html())}</u>`;
        }).get();
      }

      if (this.attributes.value.length <= 0) {
        this.attributes.html = `<em>${this.element.data('placeholder') || 'None'}</em>`;
      }
    }

    this.dom.button = $('<button />', {
      html: this.attributes.html,
    }).insertAfter(this.element);

    this.dom.options = $('<div />', {
      class: 'options',
    }).insertAfter(this.dom.button).wrap('<div class=\'content\'></div>');

    this.dom.list = $('<ul />').appendTo(this.dom.options);

    this.element.find('optgroup, option').each((p, k) => {
      let data = {};
      const $item = $(k);

      if ($item.prop('tagName') === 'OPTGROUP') {
        data = {
          'data-label': '',
        };

        data.html = $item.attr('label');
      }

      if ($item.prop('tagName') === 'OPTION') {
        data = {
          'data-option': '',
          'data-value': $item.val(),
        };

        if ($item.is('disabled')) {
          data.disabled = 'disabled';
        }

        if (!$item.data('content')) {
          if ($item.parent('optgroup').data('content')) {
            data.html = $item.parent('optgroup').data('content').replace('($content)', $item.html());
          }

          if (!$item.parent('optgroup').data('content')) {
            data.html = $item.html();
          }
        }

        if ($item.data('content')) {
          data.html = $item.data('content').replace('($content)', $item.html());
        }
      }

      data.html = $.trim(data.html);

      $('<li />', data).appendTo(this.dom.list);
    });

    if (this.element.data('filter')) {
      this.dom.filter = $('<input />', {
        type: 'text',
        placeholder: this.element.data('filter') || 'Type anything to search...',
      })
        .prependTo(this.dom.options.parent('.content'))
        .wrap("<div class='filter'></div>");
    }

    return this;
  }

  mark() {
    if (Helpers.is(this.element, '[multiple]') === false) {
      if (this.attributes.value.length > 0) {
        this.dom.list.find(`li[data-option][data-value='${this.attributes.value}']`).addClass('active');
      }

      if (this.attributes.value.length <= 0) {
        this.dom.list.find('li[data-option]:eq(0)').addClass('active');
      }
    }

    if (Helpers.is(this.element, '[multiple]') === true) {
      if (this.attributes.value.length > 0) {
        $.each(Object.entries(this.attributes.value), (i, el) => {
          this.dom.list.find(`li[data-option][data-value='${el}']`).addClass('active');
        });
      }
    }

    return this;
  }

  initialize() {
    this.settings.initialize.call(
      this.element,
      this.element,
    );

    return this;
  }
}
