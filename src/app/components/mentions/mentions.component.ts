import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  Options = {
    // symbol that starts the lookup
    trigger: '@',

    // element to target for @mentions
    iframe: null,

    // class added in the flyout menu for active item
    selectClass: 'highlight',

    // function called on select that returns the content to insert
    selectTemplate: function (item) {
      return '<span contenteditable="false"><a href="http://zurb.com" target="_blank"> @' + item.original.value + '</a></span>';
    },

    // template for displaying item in menu
    menuItemTemplate: function (item) {
      return item.string;
    },

    // template for when no match is found (optional),
    // If no template is provided, menu is hidden.
    noMatchTemplate: null,

    // specify an alternative parent container for the menu

    // column to search against in the object (accepts function or string)
    lookup: 'key',

    // column that contains the content to insert by default
    fillAttr: 'value',

    // REQUIRED: array of objects to match
    values: [
      {key: 'Phil Heartman', value: 'pheartman'},
      {key: 'Gordon Ramsey', value: 'gramsey'},
      {key: 'Phil Heartman', value: 'pheartman'},
      {key: 'Gordon Ramsey', value: 'gramsey'},
      {key: 'Phil Heartman', value: 'pheartman'},
      {key: 'Gordon Ramsey', value: 'gramsey'},
      {key: 'Phil Heartman', value: 'pheartman'},
      {key: 'Gordon Ramsey', value: 'gramsey'}
    ],

    // specify whether a space is required before the trigger character
    requireLeadingSpace: true,

    // specify whether a space is allowed in the middle of mentions
    allowSpaces: true,

    // optionally specify a custom suffix for the replace text
    // (defaults to empty space if undefined)
    replaceTextSuffix: '\n',

    // specify whether the menu should be positioned.  Set to false and use in conjuction with menuContainer to create an inline menu
    // (defaults to true)
    positionMenu: true,

    // when the spacebar is hit, select the current match
    spaceSelectsMatch: false,

    // Customize the elements used to wrap matched strings within the results list
    // defaults to <span></span> if undefined
    searchOpts: {
      pre: '<span style="color: red;">',
      post: '</span>'
    }
  };

  private text;

  mention(data) {
    this.text = data;
    console.log('mention :  ' + data);
  }
  hey(data) {
    this.text = data;
    console.log(data);
  }
  constructor() { }

  ngOnInit() {
  }
}
