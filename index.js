const discord = require('discord.js')
const bot = new discord.Client()

bot.login(process.env.ssToken)

bot.on('ready', () => {
  console.log(bot.user.username + ' is Online!')
})

bot.on('guildMemberAdd', (member) => {
  let targetRole = bot.guilds.get('558296123794653206').roles.find('name', 'User')
  member.addRole(targetRole.id)
  bot.channels.get('558296123794653208').send('Hello, ' + member.displayName + '(' + member.id + ')!')
  console.log(member.displayName + '(' + member.id + ')')
})
