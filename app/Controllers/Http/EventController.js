'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ params, request }) {
    let where = {}

    if (request.get().date) {
      const date = request.get().date

      where = { user_id: params.users_id, date }
    } else {
      where = { user_id: params.users_id }
    }

    const events = await Event.query()
      .where(where)
      .with('user')
      .fetch()

    return events
  }

  async store ({ request, params }) {
    const data = request.only([
      'title',
      'guest_email',
      'location',
      'date',
      'time'
    ])

    const user = await Event.create({ ...data, user_id: params.users_id })

    return user
  }

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params }) {
    console.log('passei aqui')
    const event = await Event.findOrFail(params.id)

    await event.delete()
  }
}

module.exports = EventController
