require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');
const client = new Discord.Client();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet(process.env.DOC);


// LOGIN
client.login(process.env.DISCORD_LOGIN);

const authenticate = async () => {

  await doc.useServiceAccountAuth({
    client_email: process.env.API_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.PRIVATE_KEY
  });
  
  await doc.loadInfo();
  console.log('auth OK')
};

// BOT IS ON
const readyDiscord = async () => {
  await authenticate();
  console.log('Ready to work');
}
client.once('ready', readyDiscord);

// READS MSG AND UPDATES GOOGLE SHEET
client.on('message', msg => {
  //Cron task to avoid shutdown by Heroku
  const testChannel = client.channels.cache.get('775074059415060503');
  cron.schedule('*/29 * * * *', () => {
    testChannel.send('');
  });

  if (msg.content.includes('https://soundcloud.com')){
    
    
    // Extract Sdcld link from msg
    const trackLink = msg.content.split(/[\s]+/);
    const url = trackLink.filter(word => word.startsWith('https://soundcloud'));
    
    // //Update sheet
    const updateSheet = async () => {
      msg.reply('test')
      await authenticate();
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const addRow = () => sheet.addRow({Name: msg.author.username, Soundcloud: String(url[0])});
      addRow();
    }
    updateSheet();
  }
})


