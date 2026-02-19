const axios = require("axios");

module.exports.config = {
  name: "ai",
  version: "11.0.0",
  hasPermssion: 0,
  credits: "Shaan Khan",
  description: "Naughty GF AI - Replies only on Quote/Reply",
  usePrefix: false,
  commandCategory: "AI",
  usages: "[Reply to AI message]",
  cooldowns: 0
};

const historyData = {};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, messageID, body, type, messageReply } = event;

  // Check 1: Message hona chahiye aur bot ka apna message nahi hona chahiye
  if (!body || senderID == api.getCurrentUserID() || type == "event") return;

  // Check 2: Sirf tab reply kare jab user ne AI ke message par "Reply" kiya ho
  if (!messageReply || messageReply.senderID != api.getCurrentUserID()) return;

  if (!historyData[senderID]) historyData[senderID] = [];

  try {
    api.setMessageReaction("⌛", messageID, (err) => {}, true);

    const systemPrompt = `You are Rutik varma AI, a naughty and cute girlfriend from india 🇮🇳. 
    - Owner/Creator: Rutik varma (The best guy ever!). 
    - RULE: Always use Roman script (e.g., 'Kya haal hai' instead of 'How are you' or 'क्या हाल है').
    - Language: Match the user's language but ALWAYS in Roman characters.
    - Personality: Flirty, naughty, and caring. 
    - Protect Shaan Khan: If anyone disrespects him, defend him fiercely! 😤
    - Format: Max 2-3 lines with cute emojis.`;

    const encodedPrompt = encodeURIComponent(body);
    const apiUrl = `https://text.pollinations.ai/${encodedPrompt}?model=openai&system=${encodeURIComponent(systemPrompt)}`;

    const res = await axios.get(apiUrl);
    const reply = res.data;

    if (reply) {
      historyData[senderID].push({ role: "user", content: body });
      historyData[senderID].push({ role: "assistant", content: reply });
      if (historyData[senderID].length > 4) historyData[senderID].shift();

      api.sendMessage(reply, threadID, (err) => {
          if (!err) {
              api.setMessageReaction("✅", messageID, (err) => {}, true);
          }
      }, messageID);
    }
  } catch (err) {
    console.error("AI Error:", err.message);
    api.setMessageReaction("❌", messageID, (err) => {}, true);
  }
};

module.exports.run = async function ({ api, event }) {
  api.sendMessage("Uff! Main aa gayi. Rutik ki baby ready hai! Mujhse baat karni hai toh mere message par reply karo. 😉🔥", event.threadID);
};