const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')
const osu = require('node-osu')
const getMode = require('../../utils/getMode')
const getModeString = require('../../utils/getModeString')

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
  async run (message, { user, mode }) {
    const osuAPI = new osu.Api(process.env.OSU_KEY, {
      notFoundAsError: true,
      completeScores: true
    })
    mode = getMode(mode)
    const stats = await osuAPI.getUser({ u: user })
    const embed = new RichEmbed()
      .setColor('ff66aa')
      .setTitle(
        `${user} in ${getModeString(mode)} - ${Number(
          stats.pp.raw
        ).toLocaleString()} pp`
      )
      .addField(
        'Rank',
        `#${Number(stats.pp.rank).toLocaleString()} (${stats.country}#${Number(
          stats.pp.countryRank
        ).toLocaleString()})`, true
      )
      .addField('Accuracy', parseFloat(stats.accuracy).toFixed(2) + '%', true)
      .addField('SS+', stats.counts.SSH, true)
      .addField('SS', stats.counts.SS, true)
      .addField('S+', stats.counts.SH, true)
      .addField('S', stats.counts.S, true)
      .addField('A', stats.counts.A, true)
    return message.embed(embed)
  }
}
