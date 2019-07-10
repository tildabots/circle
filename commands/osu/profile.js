const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')
const osu = require('node-osu')
const getMode = require('./utils/getMode')

module.exports = class ProfileCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'profile',
      aliases: ['player'],
      group: 'osu',
      memberName: 'profile',
      description: 'Looks up osu! profiles.',
      args: [
        {
          key: 'user',
          prompt: 'What user should I look up?',
          type: 'string'
        },
        {
          key: 'mode',
          prompt: 'Which game mode should I look up user stats for?',
          type: 'string',
          default: 'std'
        }
      ]
    })
  }
  run (message, { user, mode }) {
    try {
      const stats = process.env.API.getUser({ u: user, m: getMode(mode) })
    } catch {
      return message.say(":x: That didn't work - perhaps check your spelling?")
    }
    const embed = new RichEmbed()
      .setColor('ff66aa')
      .setTitle(user + 'in' + mode)
    embed.addField(
      'Rank',
      `#${stats.pp.rank} (${stats.country}#${stats.pp.countryRank}`
    )
    return message.say('WIP')
  }
}
