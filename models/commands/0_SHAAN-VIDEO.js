const axios = require("axios");
const yts = require("yt-search");

// 🔒 CREDIT LOCK SYSTEM (DO NOT REMOVE)
const CREDIT = "Shaan Khan";
if (module.exports?.config?.credits && module.exports.config.credits !== CREDIT) {
  throw new Error(
    "\n❌ CREDIT LOCK ACTIVATED!\nOnly Shaan Khan is allowed to edit this file.\n"
  );
}
// END LOCK 🔒

// 🎞️ Loading Frames
const frames = [
  "🎬 ▰▱▱▱▱▱▱▱▱▱ 10%",
  "📡 ▰▰▱▱▱▱▱▱▱▱ 25%",
  "⚙️ ▰▰▰▰▱▱▱▱▱▱ 45%",
  "📦 ▰▰▰▰▰▰▱▱▱▱ 70%",
  "✅ ▰▰▰▰▰▰▰▰▰▰ 100%"
];

// 🌐 API Loader
const baseApiUrl = async () => {
  const base = await axios.get(
    "https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json"
  );
  return base.data.api;
};

(async () => {
  global.apis = {
    diptoApi: await baseApiUrl()
  };
})();

// 🎥 Stream helper
async function getStreamFromURL(url, pathName) {
  const response = await axios.get(url, {
    responseType: "stream",
    timeout: 60000
  });
  response.data.path = pathName;
  return response.data;
}

// 🎯 YouTube ID
function getVideoID(url) {
  const regex =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/* ⚙ CONFIG — name LOWERCASE is MUST */
module.exports.config = {
  name: "video",
  version: "2.5.0",
  credits: "Shaan Khan",
  hasPermssion: 0,
  cooldowns: 3,
  description: "YouTube video download (No prefix needed)",
  commandCategory: "media",
  usages: "video <name | link>"
};

/* ================= PREFIX-FREE RUN ================= */
module.exports.run = async function ({ api, args, event }) {
  try {
    if (!args[0]) {
      return api.sendMessage(
        "❌ Video ka naam ya YouTube link do",
        event.threadID,
        event.messageID
      );
    }

    const input = args.join(" ");

    const loading = await api.sendMessage(
      "🔍 Processing...",
      event.threadID
    );

    for (const f of frames) {
      await new Promise(r => setTimeout(r, 400));
      await api.editMessage(f, loading.messageID);
    }

    let videoID;

    if (input.includes("youtu")) {
      videoID = getVideoID(input);
      if (!videoID) throw new Error("Invalid URL");
    } else {
      const res = await yts(input);
      if (!res.videos.length) throw new Error("No result");
      videoID = res.videos[0].videoId;
    }

    const { data } = await axios.get(
      `${global.apis.diptoApi}/ytDl3?link=${videoID}&format=mp4&quality=360`,
      { timeout: 30000 }
    );

    const shortLink = (
      await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          data.downloadLink
        )}`
      )
    ).data;

    api.unsendMessage(loading.messageID);

    return api.sendMessage(
      {
        body:
          `🎬 Title: ${data.title}\n` +
          `📺 Quality: ${data.quality || "360p"}\n` +
          `📥 Download: ${shortLink}`,
        attachment: await getStreamFromURL(
          data.downloadLink,
          `${data.title}.mp4`
        )
      },
      event.threadID,
      event.messageID
    );

  } catch (err) {
    console.error(err);
    return api.sendMessage(
      "⚠️ Server busy hai ya API slow hai 😢",
      event.threadID,
      event.messageID
    );
  }
};
    
