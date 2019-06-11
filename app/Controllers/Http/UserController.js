'use strict'

const Hash = use('Hash')

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, response, params }) {
    const data = request.only(['name', 'password', 'new_password'])

    const user = await User.findOrFail(params.id)

    const dataUser = {
      name: data.name,
      password: data.new_password
    }

    const isSame = await Hash.verify(data.password, user.password)

    if (!isSame) {
      response
        .status(400)
        .send({ error: { message: 'Incorrect current password' } })
      return
    }
    user.merge(dataUser)

    await user.save()

    return user
  }
}

module.exports = UserController
