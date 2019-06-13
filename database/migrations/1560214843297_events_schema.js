'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title', 254).notNullable()
      table.string('location', 254).notNullable()
      table.date('date').notNullable()
      table.time('time').notNullable()
      table.string('guest_email', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
