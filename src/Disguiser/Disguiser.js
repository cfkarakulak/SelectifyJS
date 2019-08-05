/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Disguise native select element to make it even uglier.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

import Defaults from './Defaults';
import Helpers from '../Helpers/Helpers';

export default class Disguiser {
  constructor(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, Defaults, options);

    this.attributes = {
      html: '',
      value: this.element.val(),
    };

    this.dom = {
      button: null,
      options: null,
    };

    this.element.addClass('hidden');

    if (Helpers.is(this.element, '[multiple]') === true) {
      this.element.wrap('<div class=\'selectify multiple\'></div>');

      if (this.attributes.value.length > 0) {
        this.attributes.html = this.element.find('option:selected').map(function () {
          return `<u>${this.innerHTML.trim().replace(/&nbsp;/g, '<i></i>')}</u>`;
        }).get();
      }

      if (this.attributes.value.length <= 0) {
        this.attributes.html = `<em>${this.element.data('placeholder') || 'None'}</em>`;
      }

      this.dom.button = $('<button />', {
        html: this.attributes.html,
      }).insertAfter(this.element);
    }

    if (Helpers.is(this.element, '[multiple]') === false) {
      this.element.wrap('<div class=\'selectify\'></div>');

      if (this.attributes.value.length > 0) {
        this.attributes.html = this.element.find('option:selected').html().trim().replace(/&nbsp;/g, '<i></i>');
      }

      if (this.attributes.value.length <= 0) {
        this.attributes.html = this.element.find('option:eq(0)').html().trim().replace(/&nbsp;/g, '<i></i>');
      }

      this.dom.button = $('<button />', {
        html: this.attributes.html,
      }).insertAfter(this.element);
    }

    this.dom.options = $('<div />', {
      class: 'options',
    }).insertAfter(this.dom.button).wrap('<div class=\'content\'></div>');

    this.dom.list = $('<ul />').appendTo(this.dom.options);

    this.element.find('optgroup, option').each((p, k) => {
      let data = {};

      if (k.nodeName === 'OPTGROUP') {
        data = {
          'data-label': '',
          html: k.getAttribute('label'),
        };
      }

      if (k.nodeName === 'OPTION') {
        data = {
          'data-option': '',
          'data-value': k.value,
          html: k.innerHTML.trim().replace(/&nbsp;/g, '<i></i>'),
        };

        if (k.hasAttribute('disabled')) {
          data.disabled = 'disabled';
        }

        if (k.classList.contains('hidden')) {
          data.class = 'hidden';
        }
      }

      $('<li />', data).appendTo(this.dom.list);
    });

    if (this.element.data('filter') === true) {
      $('<input />', {
        type: 'text',
        placeholder: 'Type anything to search...',
      })
        .prependTo(this.dom.options.parent('.content'))
        .wrap("<div class='filter'></div>");
    }

    if (Helpers.is(this.element, '[multiple]') === true) {
      if (this.attributes.value.length > 0) {
        $.each(Object.entries(this.attributes.value), (i, el) => {
          this.dom.list.find(`li[data-option][data-value='${el}']`).addClass('active');
        });
      }
    }

    if (Helpers.is(this.element, '[multiple]') === false) {
      if (this.attributes.value.length > 0) {
        this.dom.list.find(`li[data-option][data-value='${this.attributes.value}']`).addClass('active');
      }

      if (this.attributes.value.length <= 0) {
        this.dom.list.find('li[data-option]:eq(0)').addClass('active');
      }
    }

    return this.initialize();
  }

  initialize() {
    this.settings.initialize.call(this.element, this.element);
    return this;
  }
}
