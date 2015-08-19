var alt = require('../alt')

class TodoActions {
  constructor() {
    this.generateActions(
      'create',
      'updateText',
      'toggleComplete',
      'toggleCompleteAll',
      'destroy',
      'destroyCompleted',
      'doRandom',
      'deleteLast',
      'pushToDone',
      'listOfDone'
    )
  }
}

module.exports = alt.createActions(TodoActions)
