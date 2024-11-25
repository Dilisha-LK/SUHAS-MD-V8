
//  ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗    ███╗░░░███╗██████╗░    ██╗░░░██╗░█████╗░
//  ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝    ████╗░████║██╔══██╗    ██║░░░██║██╔══██╗
//  ╚█████╗░██║░░░██║███████║███████║╚█████╗░    ██╔████╔██║██║░░██║    ╚██╗░██╔╝╚█████╔╝
//  ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗    ██║╚██╔╝██║██║░░██║    ░╚████╔╝░██╔══██╗
//  ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝    ██║░╚═╝░██║██████╔╝    ░░╚██╔╝░░╚█████╔╝
//  ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░    ╚═╝░░░░░╚═╝╚═════╝░    ░░░╚═╝░░░░╚════╝░

//  ░██╗░░░░░░░██╗██╗░░██╗░█████╗░████████╗░██████╗░█████╗░██████╗░██████╗░    ██████╗░░█████╗░████████╗
//  ░██║░░██╗░░██║██║░░██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗╚══██╔══╝
//  ░╚██╗████╗██╔╝███████║███████║░░░██║░░░╚█████╗░███████║██████╔╝██████╔╝    ██████╦╝██║░░██║░░░██║░░░
//  ░░████╔═████║░██╔══██║██╔══██║░░░██║░░░░╚═══██╗██╔══██║██╔═══╝░██╔═══╝░    ██╔══██╗██║░░██║░░░██║░░░
//  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║░░░██║░░░██████╔╝██║░░██║██║░░░░░██║░░░░░    ██████╦╝╚█████╔╝░░░██║░░░
//  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░    ╚═════╝░░╚════╝░░░░╚═╝░░░



// * Project name - SUHAS- MD 
// * Author - Suhas Pathsindu
// * Team - Suhas Bro 
// * Version - V2

// World best and powerfull whatsapp user bot in Sri lanka
// 🧬©ꜱᴜʜᴀꜱ-ᴍᴅ ʙʏ ꜱᴜᴀʜꜱ ᴘᴀᴛʜꜱɪɴᴅᴜッ







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pJeWdUNUJxeVdXNm9Xc1gvRDVmR2xJbkdjWWNRa2hYdnduczFMWmltaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmRQUTg0VkFaNm01TXZjRnhrOTYrRGtPNnZmSmdDdGxTb0FWMFFaQVhUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTG5aVWY0UzZENFk5N21XRE5iam41YkJ1a0tBVmxYRnUvRWF4a0dWUm5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEMHVMUFBOdFFRU3dNaFZMMXZycHFyZ3VwT0I2b3BQdFBFN0F0RVBnNDE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EbWZ4QVJnNkFsZ0luR3ZxWUFITVhKamVLbEMrcHk2OEl1dUt6NGdBMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1iMjYybi8wUVNjRWJNcFZvSExGeEpKampoZjVjUmh0U2lKRHVmMkRkVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUEwbkRnc3VWdXF0aTRPOGsyTHpza1k0eC8wNldCQ2x1U1BxZlg1d1IwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVQrdElVNlpLemY3MTBjYWE0R01LZm1jM09iM0xRUk9TeWR6ZEQxdnMzRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlrSDhaRkxHWFZSbFh6LytRUHNUNlBxcFF5c1d5VTFzR3RvQTJpQ3A1MmVaNzdrQ20wb2xlYW96VWNid2laU0VBZFk2UmJKTHFiU3NsYU5YWTJmekFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJqZjRmcGl0V1BEdEsrbWpqVm9XQXRoa1d0d2RLMTZYOWxWaVRIaEduYklFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcxMDk4NDI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYxMUU5RjdFMUYwQzU1NTBDQzRCQ0E1OTFFMDlBRkM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0MzkyOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdwaUY1UXo5UzRxcmVEelVxaWZGNUEiLCJwaG9uZUlkIjoiY2RjNDFjOGItNjdhMC00NWIxLWFlYjUtMWQwNDQ2Zjg3ODdlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdRSGRlZ2xDaWRiTEJ2TGhKQ29lZGpidVNFdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5V2VrMGMxUElLc0dSYkE5RlpLUitWUENLZUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUVZSjM3VzMiLCJtZSI6eyJpZCI6Ijk0NzcxMDk4NDI5OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWk3bW9BRUVPL1ppN29HR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoidlo5YlZmcnFONDBlWis5aWtDRVU1aGswSllBbUJrQU5LbkE0Wkg5azUyND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMVowWTJDT2ZDUnhqVm5ubUxsYm5UQm5ab1pPZ2VYemtPbVlsb0pFNjZUVENQVFhEam03S1VObmgvQ1VnUy8wVEZiNGttMDVMR0dSek9QekJmZXpyQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxTUVh4RWFqUEN2Nm9wRkFSTEJkSEFtVXNVWVc1N1NmcVgrMjZNTWV2R0pKMytrN3dRN1plN0xlVUxzRUNZRHNEVHpqOXVaaGs5VlNWakV5N1pnaEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzEwOTg0Mjk6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjJmVzFYNjZqZU5IbWZ2WXBBaEZPWVpOQ1dBSmdaQURTcHdPR1IvWk9kdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQzOTI5MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBWWUifQ==", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "94775713391", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
MODE: process.env.MODE || "public", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
