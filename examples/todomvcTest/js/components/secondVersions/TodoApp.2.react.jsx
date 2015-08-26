/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @jsx React.DOM
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var Footer = require('./Footer.2.react');
var Header = require('./Header.2.react');
var MainSection = require('./MainSection.2.react');
var React = require('react');
var TodoStore2 = require('../../stores/TodoStore2');
var FluxyMixin = require('../../../mixins/FluxyMixin');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore2.getState().todos,
    areAllComplete: TodoStore2.areAllComplete()
  };
}

var TodoApp = React.createClass({
  mixins: [FluxyMixin],

  statics: {
    storeListeners: {
      _onChange: TodoStore2
    }
  },

  getInitialState: function() {
    return getTodoState();
  },

  /**
   * @return {object}
   */
  render: function() {
  	return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore2
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = TodoApp;
