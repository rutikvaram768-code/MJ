const axios = require("axios"); // Fixed 'const'

/* 🔒 CREDITS LOCK 🔒 */
function checkCredits() {
  const correctCredits = "SHAAN KHAN";
  if (module.exports.config.credits !== correctCredits) {
    throw new Error("❌ Credits Locked By SHAAN KHAN");
  }
}

module.exports.config = {
  name: "ai",
  version: "1.0.1",
  credits: "SHAAN KHAN",
  description: "GPT-4 FREE AI for Mirai Bot",
  usages: "ai <message>",
  hasPrefix: false, // Mirai user ke liye optional prefix
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  checkCredits();

  const input = args.join(" ");
  if (!input) {
    return api.sendMessage(
      "🤖 Kuch likho na jaan, phir main jawab dungi 💕",
      event.threadID,
      event.messageID
    );
  }

  api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

  try {
    const apiUrl = "https://text.pollinations.ai/"; // Updated simplified endpoint
    
    // Pollinations usually works better with formatted prompts for simple hits
    const prompt = `System: Tum ek pyari, friendly, desi girlfriend AI ho. User jis language mein baat kare, usi language mein jawab do. Reply 2-3 lines ka ho, emoji use karo.\nUser: ${input}`;

    const response = await axios.get(`${apiUrl}${encodeURIComponent(prompt)}`);

    const reply = response.data || "😔 Sorry jaan, thora sa issue aa gaya.";

    api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    api.sendMessage(
      `${reply}\n\n»»𝑶𝑾𝑵𝑬𝑹«« ★™\n»»𝐑𝐔𝐓𝐈𝐊 𝐕𝐀𝐑𝐌𝐀««`,
      event.threadID,
      event.messageID
    );
  } catch (err) {
    api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    api.sendMessage(
      "⚠️ AI abhi busy hai jaan, thori dair baad try karo 💔",
      event.threadID,
      event.messageID
    );
  }
};