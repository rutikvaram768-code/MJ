const axios = require("axios");

module.exports.config = {
  name: "arman",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Google Gemini Flash 2.0 AI (No Prefix)",
  commandCategory: "ai",
  usages: "arman [question]",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api, event }) {
  try {
    const body = event.body?.trim();
    if (!body) return;

    if (!body.toLowerCase().startsWith("arman")) return;

    let question = body.slice(5).trim();
    if (!question) {
      question = "koi joke ya shayari sunao";
    }

    const API_KEY = "AIzaSyDoYuV__4xooIqaZg21rmgWIjcxDV15ado";

    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const res = await axios.post(url, {
      contents: [
        {
          parts: [{ text: question }]
        }
      ]
    });

    let reply = "❌ Gemini se reply nahi mila";

    if (res.data?.candidates?.[0]?.content?.parts?.length) {
      reply = res.data.candidates[0].content.parts
        .map(p => p.text)
        .join("\n");
    }

    return api.sendMessage(reply, event.threadID, event.messageID);

  } catch (err) {
    console.log("Gemini Error:", err.response?.data || err.message);
    return api.sendMessage(
      "❌ Gemini Flash error (API / Key issue)",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.run = () => {};