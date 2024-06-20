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
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253254710492926023/a26e21a8712e78a6cd9e7cd3f0be12a5.png?ex=66752fe7&is=6673de67&hm=f5c99a8c878c6013dfb424a0d5a5bc79fc0fa1373cb0d4270bec2f791237fb43&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('*:･ﾟ✧*:･ﾟ ᴋᴇʀᴇᴍᴍ 💓') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1100708631311286342/1253254857666854912/18ba6345caed40be758cfbc2f89d24ff.png?ex=6675300a&is=6673de8a&hm=37a29e774a1002f40f5cef016ea7cbe26dbedbfac2b8145979f959c97b18875c&') //You can put links in tenor or discord and etc.
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
