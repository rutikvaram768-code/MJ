const axios = require("axios");
const yts = require("yt-search");

// 🔐 CREDITS LOCK (OFFICIAL)
function checkCredits() {
    const correctCredits = "SHAAN-KHAN";
    if (module.exports.config.credits !== correctCredits) {
        throw new Error("❌ Credits Locked By SHAAN-KHAN");
    }
}

// 🌐 Base API
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

// 🎧 Stream
async function getStreamFromURL(url, pathName) {
    const res = await axios.get(url, { responseType: "stream" });
    res.data.path = pathName;
    return res.data;
}

// 🎥 YouTube ID
function getVideoID(url) {
    const regex =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))((\w|-){11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

module.exports.config = {
    name: "music",
    version: "2.0.0",
    credits: "SHAAN-KHAN", // 🔐 DO NOT CHANGE
    hasPermssion: 0,
    cooldowns: 5,
    description: "YouTube se official MP3 download",
    commandCategory: "media",
    usages: "[YouTube link ya song name]"
};

module.exports.run = async function ({ api, args, event }) {
    try {
        checkCredits();

        let videoID;
        let info;

        // ⌛ Fixed searching message (NO QUERY)
        const waitMsg = await api.sendMessage(
            "✅Apki request jari hai please wait...",
            event.threadID
        );

        const url = args[0];

        if (url && (url.includes("youtube.com") || url.includes("youtu.be"))) {
            videoID = getVideoID(url);
            if (!videoID)
                return api.sendMessage("❌ Invalid YouTube URL!", event.threadID);
            info = await yts({ videoId: videoID });
        } else {
            const query = args.join(" ");
            if (!query)
                return api.sendMessage(
                    "❌ Song ka naam ya YouTube link do!",
                    event.threadID
                );

            const search = await yts(query);
            const video = search.videos[0]; // ✅ OFFICIAL (NO RANDOM)
            if (!video)
                return api.sendMessage("❌ Koi result nahi mila!", event.threadID);

            videoID = video.videoId;
            info = video;
        }

        api.unsendMessage(waitMsg.messageID);

        const { data } = await axios.get(
            `${global.apis.diptoApi}/ytDl3?link=${videoID}&format=mp3`
        );

        const title = info.title;
        const channelName = info.author?.name || "YouTube Artist";

        return api.sendMessage(
            {
                body:
`🎵 ${title}

👤 Profile: ${channelName}

»»𝑶𝑾𝑵𝑬𝑹««★™
✮⃝❤≛⃝ R𝐮𝐭𝐢𝐤──────亗🕊️
😘𝒀𝑬 𝑳𝑶 𝑩𝑨𝑩𝒀 𝑨𝑷𝑲𝑰👉 MUSIC`,
                attachment: await getStreamFromURL(
                    data.downloadLink,
                    `${title}.mp3`
                )
            },
            event.threadID,
            event.messageID
        );
    } catch (e) {
        console.error(e);
        api.sendMessage(
            "⚠️ Error aa gaya, baad me try karo!",
            event.threadID
        );
    }
};