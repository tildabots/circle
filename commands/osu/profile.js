const { Command } = require('discord.js-commando')

module.exports = class ProfileCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'profile',
      aliases: ['player'],
      group: 'osu',
      memberName: 'profile',
      description: 'Looks up osu! profiles.'
    })
  }
  run (message) {
    return message.say('WIP')
  }
}
