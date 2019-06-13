'use strict'

const Mail = use('Mail')

const MailHook = (exports = module.exports = {})

MailHook.sendEventMail = async eventInstance => {
  if (!eventInstance.guest_email && !eventInstance.dirty.guest_email) return

  // const { email, name } = await eventInstance.user().fetch()

  const { title, location, date, time } = eventInstance

  await Mail.send(
    ['emails.share_event'],
    { title, location, date, time },
    message => {
      message
        .to(eventInstance.guest_email)
        .from('ihenrits@gmail.com', 'Henrique Tavares')
        .subject('Você foi convidado')
    }
  )
}
