1234const os = require("os");

global.client.timeStart = global.client.timeStart || Date.now();

module.exports.config = {
  name: "upt",
  version: "2.1.0",
  hasPermssion: 0,
  credits: "RUTIK BABU",
  description: "Show bot uptime with date & time",
  commandCategory: "system",
  usages: "upt",
  cooldowns: 5
};

// 🧠 FORMAT UPTIME
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}ʜ ${m}ᴍ ${s}ꜱ`;
}

// 📌 COMMON FUNCTION (reuse)
async function sendUptime(api, event) {
  const { threadID, messageID } = event;

  const uptime = process.uptime();
  const now = new Date();

  // 🇮🇳 MUMBAI TIME
  const time = now.toLocaleTimeString("en-IN", {
    timeZone: "mumbai/Maharashtra",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const date = now.toLocaleDateString("en-IN", {
    timeZone: "mumbai/Maharashtra",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const day = now.toLocaleDateString("en-IN", {
    timeZone: "Mumbai/Maharashtra",
    weekday: "long"
  });

  const msg = `
✦••┈┈┈┈┈┈┈ ✧ ┈┈┈┈┈┈┈••✦
    ❤️‍🔥 𝗨𝗣𝗧𝗜𝗠𝗘 ✅
✦••┈┈┈┈┈┈┈ ✧ ┈┈┈┈┈┈┈••✦

✰ RUN ➪ ${formatUptime(uptime)} 🤖
✰ TIME ➪ ${time} 😎
✰ DATE ➪ ${date} 📅
✰ DAY ➪ ${day} 🥳

༺══─────────══༻
MADE BY ✮⃝❤≛⃝ 𝐑𝐮𝐭𝐢𝐤─────亗🕊️`;

  return api.sendMessage(msg, threadID, messageID);
}

// ✅ NO-PREFIX SUPPORT
module.exports.handleEvent = async ({ api, event }) => {
  if (!event.body) return;

  // sirf "upt" likhne pe
  if (event.body.trim().toLowerCase() === "upt") {
    return sendUptime(api, event);
  }
};

// ✅ PREFIX SUPPORT
module.exports.run = async ({ api, event }) => {
  return sendUptime(api, event);
};
