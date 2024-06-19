const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=zqLMEulWcbQ') //Must be a youtube video link 
    .setState('✧˚ · . ᴀᴄᴛɪᴠᴇ 𝟸𝟺/𝟽')
    .setName(' ')
    .setDetails(`≡;- ꒰ °ᴄʟᴏʀɪɴᴅᴇ ꒱ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253002928785068052/4454897cc05c866d1682ea4b9a519cb5.gif?ex=66744569&is=6672f3e9&hm=768e8ae75d92ee9e84c72eed04d27fa1c3c185eaca5af82705b32dd0dc7181df&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('*:･ﾟ✧*:･ﾟ ᴋᴇʀᴇᴍᴍ 💓 ᴇʟᴇᴄᴛʀᴏ') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253006791466422322/806acdf729a8ec7cc8117ae2abb2c048.png?ex=66744902&is=6672f782&hm=cfee13ace34143d9e0cdcc257b6e0f079ae314c532e07897e381943942630361&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(' ') //Text when you hover the Small image

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
