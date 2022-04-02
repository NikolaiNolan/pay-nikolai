import * as fs from 'fs'
import * as functions from 'firebase-functions';

export const host = functions.https.onRequest((request, response) => {
  const userAgent = request.headers['user-agent']?.toLowerCase() || '';
  let indexHTML = fs.readFileSync('index.html').toString();
  response.send('test4');
  return;
//passsing directoryPath and callback function
fs.readdir('./', function (err, files) {
    //handling error
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return;
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});


  const path = request.path ? request.path.split('/') : request.path;
  let value = path[1];

  const isBot = userAgent.includes('googlebot') ||
    userAgent.includes('yahoou') ||
    userAgent.includes('bingbot') ||
    userAgent.includes('baiduspider') ||
    userAgent.includes('yandex') ||
    userAgent.includes('yeti') ||
    userAgent.includes('yodaobot') ||
    userAgent.includes('gigabot') ||
    userAgent.includes('ia_archiver') ||
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('twitterbot') ||
    userAgent.includes('developers\.google\.com');

  if (isBot && value) {
    value = (Math.round(+value * 100) / 100).toFixed(2);
    indexHTML = indexHTML.replace('Send some money to Nikolai.', `Send $${value} to Nikolai`);
  }
  response.send('test');
  return;
});
