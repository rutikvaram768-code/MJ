const axios = require("axios");

module.exports.config = {
  name: "hercai",
  version: "2.7.0",
  hasPermission: 0,
  credits: "Shaan Khan", 
  description: "Strict Script Forcer (Native Fonts Only)",
  commandCategory: "AI",
  usePrefix: false,
  usages: "[Reply to bot]",
  cooldowns: 2,
};

let userMemory = {};
let lastScript = {}; 
let isActive = true;

module.exports.handleEvent = async function ({ api, event }) {
  if (global.client.commands.get("hercai").config.credits !== "Shaan Khan") {
    return api.sendMessage("⚠️ Error: Credits changed.", event.threadID, event.messageID);
  }

  const { threadID, messageID, senderID, body, messageReply } = event;
  if (!isActive || !body) return;
  if (!messageReply || messageReply.senderID !== api.getCurrentUserID()) return;

  api.setMessageReaction("⌛", messageID, () => {}, true);
  
  const userQuery = body.toLowerCase();
  if (!userMemory[senderID]) userMemory[senderID] = [];
  
  // Default Script check
  if (!lastScript[senderID]) lastScript[senderID] = "Roman Urdu";

  // Language Detection Logic
  if (userQuery.includes("pashto") || userQuery.includes("پښتو")) {
    lastScript[senderID] = "NATIVE PASHTO SCRIPT (پښتو)";
  } else if (userQuery.includes("urdu") && (userQuery.includes("script") || userQuery.includes("mein"))) {
    lastScript[senderID] = "NATIVE URDU NASTALIQ SCRIPT (اردو)";
  } else if (userQuery.includes("hindi") || userQuery.includes("हिंदी")) {
    lastScript[senderID] = "NATIVE HINDI DEVANAGARI SCRIPT (हिंदी)";
  } else if (userQuery.includes("roman")) {
    lastScript[senderID] = "Roman Urdu";
  }

  const conversationHistory = userMemory[senderID].join("\n");
  
  // Strict Script Forcing Prompt
  const systemPrompt = `You are an AI by Shaan Khan.
  CRITICAL RULE: The user wants to talk in ${lastScript[senderID]}.
  - If the script is NATIVE PASHTO, you must ONLY use characters like (ښ، ډ، ځ، چ). NO ROMAN ABC.
  - If the script is NATIVE URDU, you must ONLY use Urdu Nastaliq characters. NO ROMAN ABC.
  - If the script is NATIVE HINDI, you must ONLY use Devanagari (नमस्ते). NO ROMAN ABC.
  - Even if the user asks questions in Roman Urdu, you MUST reply in the ${lastScript[senderID]}.
  - Strictly avoid Roman English/Urdu letters unless the script is set to Roman Urdu.
  Context: ${conversationHistory}`;

  // Using 'gpt-4o' or 'mistral' for better script following
  const apiURL = `https://text.pollinations.ai/${encodeURIComponent(systemPrompt + "\nUser: " + body)}?model=mistral&seed=${Math.random()}`;

  try {
    const response = await axios.get(apiURL, { timeout: 20000 });
    let botReply = response.data;

    userMemory[senderID].push(`U: ${body}`);
    userMemory[senderID].push(`B: ${botReply}`);
    if (userMemory[senderID].length > 6) userMemory[senderID].splice(0, 2);

    api.setMessageReaction("✅", messageID, () => {}, true);
    return api.sendMessage(botReply, threadID, messageID);

  } catch (error) {
    api.setMessageReaction("❌", messageID, () => {}, true);
    return api.sendMessage("❌ Script error! Dubara try karein.", threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const command = args[0]?.toLowerCase();

  if (command === "on") {
    isActive = true;
    return api.sendMessage("✅ AI Active. Language Script Mode: ON", threadID, messageID);
  } else if (command === "off") {
    isActive = false;
    return api.sendMessage("⚠️ AI Paused.", threadID, messageID);
  } else if (command === "clear") {
    userMemory = {};
    lastScript = {};
    return api.sendMessage("🧹 History cleared!", threadID, messageID);
  }
};
