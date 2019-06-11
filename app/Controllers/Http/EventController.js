'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ params }) {
    const events = await Event.query()
      .where('user_id', params.users_id)
      .with('user')
      .fetch()

    console.log(events)

    return events
  }

  async store ({ request, params }) {
    const data = request.only(['title', 'location', 'date', 'time'])

    const user = await Event.create({ ...data, user_id: params.users_id })

    return user
  }

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = EventController
