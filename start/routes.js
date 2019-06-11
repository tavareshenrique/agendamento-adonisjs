'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.put('users/:id', 'UserController.update').validator('User')

Route.post('sessions', 'SessionController.store')

Route.resource('users.events', 'EventController').apiOnly()
