const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247769141";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEoycTNYSWYrQkxmL2czUWs4Q0cySlREaTdNZ1VwVkJhZEVRYm9ERFRlbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMldvX08wakxSUHlkNWIzMUdyTjhVZ1wiLFxuICBcInBob25lSWRcIjogXCI5Zjk4NWIyNS1kMTFhLTQ3YjItYTA3Yi01ZGRjOWQ0YTkyYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjA3LFxuICAgICAgNzQsXG4gICAgICAxOCxcbiAgICAgIDIzNCxcbiAgICAgIDc0LFxuICAgICAgMjQ4LFxuICAgICAgNzUsXG4gICAgICAxMzksXG4gICAgICA5OSxcbiAgICAgIDEwNixcbiAgICAgIDIsXG4gICAgICAyNyxcbiAgICAgIDE4OCxcbiAgICAgIDIyNCxcbiAgICAgIDEzLFxuICAgICAgMTYzLFxuICAgICAgOTgsXG4gICAgICAxNjMsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjMxLFxuICAgICAgMTEsXG4gICAgICAyMTAsXG4gICAgICAyMzIsXG4gICAgICA3NCxcbiAgICAgIDYwLFxuICAgICAgMjI0LFxuICAgICAgMjQ0LFxuICAgICAgOTYsXG4gICAgICA1NixcbiAgICAgIDIyMixcbiAgICAgIDE4OSxcbiAgICAgIDQyLFxuICAgICAgMzUsXG4gICAgICA3MCxcbiAgICAgIDExNyxcbiAgICAgIDQwLFxuICAgICAgMTkxLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEtIM0xNS0VMZXk5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrQWozRTZLa0thazQrM2RsS0N2WHJoYURkU2Z2NXdiZmJhU2VuSmdhdW1VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpNRGp4dDQ2K1Q5cWVsREoydnl5TEQxNzZYZENITE1ydmVSUk9HS3hTaXBjSU5pcGhpZjFmSVh2MFZBRWkySE9Vdzhtak5CVENnNUlyNlJNY2Q3MWpnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZXWWl1OC9VZWNPMEVzbk9XSDVFQ1EzcDBYc1RvZTdTSTZVNXFBSGU4dXRFUHhsbG9aNXZvRll1TG1hdkFPaHRSRHBuY1g5aE40UDhEYWM4SzJnU0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ3NzY5MTQxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigI5Vbmtub3duXCIsXG4gICAgXCJsaWRcIjogXCIyMTQ3MDcyNjA2NjMxNDo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ3NzY5MTQxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1ODgwMjVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
