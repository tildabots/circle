/* Circle by tilda */

require('dotenv').config()
const { CommandoClient } = require('discord.js-commando')
const path = require('path')
const client = CommandoClient({
  commandPrefix: process.env.PREFIX,
  owner: process.env.OWNER,
  invite: process.env.SUPPORT,
  unknownCommandResponse: false
})
const osu = require('node-osu')

client.once('ready', () => {
  process.env.API = osu.Api(process.env.OSU_KEY)
  console.log('Circle is now ready.')
  client.user.setActivity('osu!')
})

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['etc', "Commands that aren't osu! related"],
    ['osu', 'osu! related commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))
