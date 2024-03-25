const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="mdujayerrahman@gmail.com"
global.location="Kolkata, India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/Botdeployer6";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaRgs2C30LKLMiNNPP2U";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaRgs2C30LKLMiNNPP2U" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9e0a6aa43bd4f90725cef.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919883054519";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9e0a6aa43bd4f90725cef.jpg.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "919883054519";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "919883054519";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919883054519";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_14_03_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUp3RDRJSW5JZ250QmZ3MTl2eWNUV1VNdFFXcUQ1bE5IRHRSZWlWMFYxcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImYvWG9HcGJTYW0vdUdWS3ZiNVZobWxrbmU4QVpuTWRWKzJqNkUwL3ZmQ0E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY003WjVMNkdFcitXN25vbUFLNWhKM1dRTWxJUVcvRjhydzM0MWhRcDYycz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVxTnFBNDBzdXdjQ1dYT1RYbFVvZXVGTzUxMnlPYUpuZHNDYysvQk5URm89XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0JlL0JUN2FpakhFb3dBVnYxNzRZTjhKdjZCSHdTMXhVWGJPVzR2bFFVTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImpzMktTWGJyMElwUVlPTnREdmhQQ2hlNE9hNStHcTFGaE9wNURNVU5vMUE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlQzc0VUZDRzdGTVBCRTdTZW13TldhTVE2dHhWc1V4blVrQUJoUnJQNG1BPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic2xtMU5EQmd0bGZaR2czUUxrZzhXZFlaVXd2cDkwWGdyWDZab1M4SWRDUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ2Wm50a3d5WW5xUnhBdWFTVlFYeTQyNHZDSG9BWGZTS0twejdaSmJ2K0kweTNjVzNEMlpjTEVFZWNMOEpoejdIdVp2YjFJSGU1VFZXZlpYZmJoZ2dqZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjM4LFwiYWR2U2VjcmV0S2V5XCI6XCJjL1hmQk9DWUtFWXNueHJjZ29waEJUcU9yOVBQMnhJTHJ4dzNxcmlQaXZNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiQTJiSVpNcXFRaml4S01RMjBFcXJmd1wiLFwicGhvbmVJZFwiOlwiNTM5NjRkOWEtNjBmMy00MDFhLTk5ODktYzgwOTg5OTU3ZWI0XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJQ3MrRjQyMGc5TldpVlloNlJpMi9HZG9NajQ9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUGFFdDlPS09vWTM0MmR1VHp3cUF4MU1Db0Q4PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlk5WFhFVEg4XCIsXCJtZVwiOntcImlkXCI6XCI5MTk4ODMwNTQ1MTk6NTJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTE4MjIzNjg5MjQ4ODI0OjUyQGxpZFwiLFwibmFtZVwiOlwiw5fNnMOX8J+HsiDwn4epIPCfh6cg8J+HtCDwn4e54bSAyp/htId4XCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNNzkwS1FCRUo3MGc3QUdHQVFnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiZVhkYW5XaHlIMXZwTU5OZkM5ZFdWUWZZeFpmdVNlTXRQK0tjWWV5cjBXdz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIklQNUg1Zzg0VVVLUklGMmQxSHc4L004TWljY3ZMeXBhcS9maitYdHJOSWJKTURHaWdoY0U4cFFZeHdncGY0VzM5OFRsU2E0QVF1U0o0M3VtK1MwQ0F3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiRHB5WWlMMDJKejJJTC9tVXROQ3QycDJsZ0NjZUNnUFprL1BKRkJhczdDaGZZQUYvS2pBY00yc1g4d0dBUnJOd0JReE1oLzVaMndxWmxVSEFoZkRlaHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkxOTg4MzA1NDUxOTo1MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJYbDNXcDFvY2g5YjZURFRYd3ZYVmxVSDJNV1g3a25qTFQvaW5HSHNxOUZzXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTM0MDA2NSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJVTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjdzF4SzhaUElSSFlnYnhzODZBSjRUZm5Mazc3UzFIWE1CbFBpWGp0ZWFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTI1OTcyNSxcImN1cnJlbnRJbmRleFwiOjE2LFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwLDYsN119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "© 𝐌𝐃 𝐁𝐎𝐓" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐌𝐃 𝐁𝐎𝐓",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ᴍᴅ-ʙᴏᴛ",
  ownername:process.env.OWNER_NAME|| "It'x 𝔸ʟᴇx",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
