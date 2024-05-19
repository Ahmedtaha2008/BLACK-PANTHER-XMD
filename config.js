/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "null" ;  
global.video= "https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://wa.me/201013032037"                       // put your app url here,
global.email ="Ahmedtaha2742008@gmail.com"
global.location="Egypt"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || "null"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Egypt";
global.github=process.env.GITHUB|| "null";
global.website=process.env.GURL| | "null"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01bae0068863f48aff101.jpg"



global.devs = "201013032037" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "201013032037";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201013032037";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/01bae0068863f48aff101.jpg,https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4,https://telegra.ph/file/af1705e9b4d6aa0bc0f96.jpg",
global.waPresence= proceprocess.env.MSGS_IN_LOG| | "recording"; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "201013032037";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "201013032037";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "201013032037";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://black-panther-scanner-871df7205958.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZFcFAzMktOTDNYbmNPZzZ5c1gzeFV3THZIRGdWRWlMOFg0U3oxeDlYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazBJTGdFSVhxdFM5UDlWOE1DSno5NjdCREY3ZkR5dk1QTFA3aDV1eXp6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRURXazhlSm8yeVFyNWxSMk9QNkFodCtuYXFPZWNUekk5aktrOGdXNVVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwemFXTmh6TE9yWU82RGVaN2hmaG11a3pWQ0s5c3V0VzY1bWh5Z0JneTJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNTHlkQVAxL0hLeFhkNXNxT0VYVlZOWThmdFE4dzFqQyt0bzZ4Q2t6RmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9relZ3YTZOMXVwblZ5ZURZcVA1dk5PZHFhcEI1cVJ6cWpsb2x1TkJWR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxTcHVvR2JtSFdWSDMrblA1cFByL0xud2RqSmJ5bHVlSlpDdzJiY0lIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjdPN1VSd0Z3Z2ZacjlQS3lpZEV6d1ZSRkJIRzE5Lzd3WkVoNzRYOEQyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvS2N5THozLzZXcTBJb1VXNDVtWFVncnRjaHg5V0xzeS9yOWtNb3BROEFuU2xjd0t4aFA4TndVRzFqMzdkTXVIWVo0ZGMzalZEU3kwUGxtYUpjVGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJQOUJHaGg0VEh4aWJKY0Nhclp5OGhXR3A2TDR5Q1Q2U1dZbmNmNnBoZUpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBZVc2eHJ4aVQ1NkRJcTdCUF9nWVRBIiwicGhvbmVJZCI6IjczMGE1ZGY5LWYwN2YtNGI5Ny04ZDVhLWQ5NWQzZWEyY2Q3ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzZmNld080cWNWV3ZtZ2xpcFlySUpTaFVFdmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2QyNFJaTURybjZ4OFZBSkhQM0EzQW1lMmVjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM4WDhEV0xTIiwibWUiOnsiaWQiOiIyMDEwMTMwMzIwMzc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWhtZWQgVGFoYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlRyM3NzREVKSG1xYklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRkxXT284amdEWnAyWUIwaXhPbFVCS1VvVm1hM0U2UzNOc2t5OUl1d0ExUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ3JBRmJ5MjFGZzhvVmxjbjJiK3JQNk9LanVqUjdsRy9rS2xGaks0NWxGUDZVMGhncEhIZU9WQU1GWkJMdXVObW1RV3ZtQ0dCWGdoSkp0TnY2c0xkQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik51eHVac0lvdW85cG85akR1YnpkNG02YWtaVC9QTVprOWpiMGxUTGRNWFJidWU4c1BReEkySnZDVkduQUJsVWM2TGN1U2hXSVdjTHNrWUVQNU13dmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjAxMDEzMDMyMDM3OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJTMWpxUEk0QTJhZG1BZElzVHBWQVNsS0ZabXR4T2t0emJKTXZTTHNBTlUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTYxNTUxNjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUI0In0=" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*🐯𝘽𝙇𝘼𝘾𝙆 𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿 𝙑4 🐯*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  packname: process.env.PACK_NAME || "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  botname : process.env.BOT_NAME  || "𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "𝕬𝖍𝖒𝖊𝖉 𝕿𝖆𝖍𝖆",


  errorChat : process.env.ERROR_CHAT || "null",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "null",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "null",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "null",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "null",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
