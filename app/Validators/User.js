'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      password: 'required',
      new_password: 'required|confirmed'
    }
  }
}

module.exports = User
