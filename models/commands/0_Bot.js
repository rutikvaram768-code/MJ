const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by Uzairrajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga",    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
    "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
            "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ","Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
 "Ha chor mujhe jao Pakistan airport pe ", "Allah ke  name pe raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krwao apna 😏", "Tum wohi ho na jo zamin se 1 rupya bhi utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao tw kbhi < HYDERABAD > phr milke party krte h ", "ooo bot k  chamcheee pup ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
            "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi tumko thand me jmate hai 😁😹", "apna sasta internet pack htake achha sa dalwao pehle"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu .","Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" ,
            "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , 
            "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" ,
            "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍","Abhi Toh Party Shuru Hui Hai" ,  "Kya Aapke Toothpaste Mein Namak Hai?" ,"Ye Dosti Hum Nahi Todenge" ,"Aapke Paas Bangla Hai, Gaadi Hai, Paisa Hai...Lekin Mere Paas Maa Hai" ,"Kabhi Kabhi Mujhe Bhi Lagta Hai Ki Main Kuch Jyada Hi Busy Ho Gya Hun 🙄","Chal na yar, movie dekhne chalte hain", "Jaldi se ready ho jao, late ho jayenge", "Kitne baje milna hai?", "Mujhe thoda time do, main abhi free nahi hun",
            "Tu sach mein pagal hai", "Aaj bahut kaam hai, baad mein baat karte hain", "Kya kar rahe ho?", "Tu kahan chala gaya tha?", "Mujhe tujhse baat karni hai", "Kal ka plan kya hai?", "Abhi kya kar rahe ho?", "Mere paas koi time nahi hai", "Jaldi se message ka jawab do", "Main thodi der mein aata hun", "Mere sath chalna hai?", "Aaj bahut maza aaya", "Kya tumne abhi tak khana nahi khaya?", "Mujhe tumse pyar hai", "Tum mere liye kuch bhi kar sakte ho", "Kahan rehte ho?", "Tumne mujhe kitna sataya hai", "Kal milte hain", "Aaj bahut busy tha", "Tum mujhe bahut yaad aate ho", "Mujhe teri zarurat hai", "Kya tumne abhi tak kaam nahi kiya?", "Main tumhare bina nahi reh sakta", "Kya tum mere saath dinner pe chal sakti ho?", "Main tumhe bahut miss karta hun", "Tum meri zindagi ho", "Tumhari yaad mein jeena mushkil hai", "Mujhe tumhari bahut yaad aa rahi hai", "Main tumhare saath hamesha rehna chahta hun",
            "Aaj bahut thaka hua hun", "Kya tum mere liye kuch bhi kar sakti ho?", "Mujhe tumhari aadat si ho gayi hai", "Tumhari muskurahat mere liye bahut important hai", "Kya tum mere saath shopping pe chal sakti ho?", "Mujhe tumse baat karke bahut achha lagta hai", "Tum mujhe bahut khushi deti ho", "Kya tum mere liye kuch special bana sakti ho?", "Mujhe tumhari har baat bahut pasand hai", "Tum mere liye kya ho?", "Main tumhe kabhi nahi bhoolunga", "Kya tum mere saath travel pe chal sakti ho?", "Mujhe tumhare saath time spend karna bahut achha lagta hai", "Tum meri duniya ho", "Mujhe tumse milne ki bahut ichcha hai", "Kya tum mere liye kuch special gift la sakti ho?","hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi",
            "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂",  "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†"  , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 ", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯", "پونکی جا مینو کی ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄", "i love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈", "Ary Yahin Hon Jan😗", "Tum sab Mujhe Pagal lagty ho😒🙄" , "Ma kisi or ka Hu filahal 🥺🙈" , "Apka Ana Dil dharkana pHr bot bol k Nas Jana😒" , "Tum tu mujhe shkal sy Ghareeb lgty ho🙊" , "Meri Gf kon Bnay gi 🥺🙁" , "Haweli py q nhi ate Naraz Ho 🥺" , "Babu ittu 🤏 sa Chumma dy do🥺🙈😘" , "Baby tum Bachpan sy tharki Lgte ho meko🙁" ,"Raat ko ana Haweli py khushbu laga k😁🙊" , "Raat Haweli py kon bula raha tha😒🙄" , "Piyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝" , "Tum itny Masoom Ku Ho babu🥺❤️" , "Aj tu tumhy Love you bolna Pary ga 🙁" , "Tum loog matlbi ho sary Jao😞" , "Setting Krwa Du Owner (𝑴𝑻𝑿 💚✨) k Sath😒🙁" , "Mujhe lgta hai Ma Single Maru ga🥺" , "Bar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈" , "Tum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈" , "Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂", "Mere ilawa sb Relationship ma han 🤝🥺", "Jab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂", "Janu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦", "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍", "Mazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂", "SOo JaO WarNa Mera Msg Aa Jaye Ga🙈", "Weight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂", "Goadi lylo apun chota sa bacha hai🥹" , "Ao apko chand py ly chalu meri jan🙈❤️" , "Tum itne Tharki Q ho Jawn🤨" , "Main apse nahi patny wala 🙈🙈🥹" , "tum ko meri ittu 🤏 C bhi yad nhi ati🥹" , "Ao piyar karyn" , "Astaghfirullah Habibi tum kitne tharki ho🥹" , "kya ham ap pr line mar sakte hn🥹👀", "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Apkii Inhii harkt0n Kiiw WaJw Sy 2O24 Bhi Chale Jaye Gyw😩💔", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️†*", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Imagine I am your Ex 🥲say whatever you want to say", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Gali daina buri bat ha ", "kash hum dono date py jata", "tum itna black kyn ho", " Uzair my boss 💋", "kìrâñ my owner 💋", "aj kis k sath tha sara din", "lakh lanat e zoom kr k 😡", "oyee miss you tujh nai teri janu ko", "owner single hai janu bano gi", "aj kal UTG group chalo na Bhoot tang Kiye huwa", "aaaa thoo ", "kabi hum be school jata tha or techar chumiyan lati thi", "Kahani suno ab ma so raha kal a kr sunata", "hain cake 🍰🎂", "teri aho aho samjh ja ", "uzair ki birthday a Rahi apko pta", "kr bakwas kya hai ", " aja hugi dn shona", "ummmmmmmmmmmmmmmmmmmmm love you 😘", "hawali py mil beta", "love kya hota apko pta chalo dafa kro", "anni dyaa mazak ay", "larkio ko gool gala psnd or mujy larkiyan", "agr uzair ijazat da to ma tujy ..... samnj ja", "dafa ho jao ", "apna muh dakh jse murgi ka 🥚 hota ", "apna muh dakh bus Khud he dakh hammy nafrt tujhse", "sona hai meny bazu rakho nachy", "kal date py chalain", "tu kitni larkio ka bhai ha fb py ", "larkiyan fb py bhai kyn banati", "agr ma nawaz sharif hota to aj tujy utha deta", "miss you janu", "hate you", "ki masla ay daso", "chal nikal ", "kal hawali kon bula rha tha", "MUH dikha bot Bot kr raha", "Tairay janay keh bahd waqt tham sa gya bahad mein pata chala garri ka cell khatam ho gya tha"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner kn hai")) {
     return api.sendMessage("️ ꜛ 3:) ⎯꯭𝁂꯭꯭꯭֯✰🩷꯭꯬꯭𓆩〭ͥ〬 ⃪ᷟ꯬༏❤️𝆺𝅥Ʀ𝐮𝐭𝐢𝐤𝆺𝅥🫰❤️⎯꯭̽𝆭⎯", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "uzair suno") || (event.body.toLowerCase() == "Uzair Suno")) {
     return api.sendMessage("️HaN G PyaRy Bolo🥰", threadID, messageID);
   };

if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "agar raho me mushkil na aye") || (event.body.toLowerCase() == "Agar Raho Me Mushkil Na Aye")) {
     return api.sendMessage("️tw me chahungi manzil kabhi na aye 💓🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Uzair") || (event.body.toLowerCase() == "uzair bhai")) {
     return api.sendMessage("️𝑴𝑻𝑿 💚✨ bolo owner ko❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Suno Uzair") || (event.body.toLowerCase() == "suno uzair")) {
     return api.sendMessage("️haN G Bolo🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "welcome ") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️tnx Bhai ❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "mtx") || (event.body.toLowerCase() == "MtX")) {
     return api.sendMessage("️Coding kar rahe hain..", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == "ap kaha c ho")) {
     return api.sendMessage("️apke ghr ke pass c 🤭", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "mera bot") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️𝑴R ✮⃝❤≛⃝ R𝐮𝐭𝐢𝐤──────亗🕊️ ☠️🏴‍☠️ ka bot hu 🙈❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Bot kia kRte ho ap") || (event.body.toLowerCase() == "kia karte ho")) {
     return api.sendMessage("️kuch nhi bs kisi c silent love or work", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "It'x Uzair Aiman Rajput") || (event.body.toLowerCase() == "it'x uzair aiman rajput")) {
     return api.sendMessage("️BOSS BUSY HAIN", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To💋😘", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "ib ao") || (event.body.toLowerCase() == "inbox")) {
     return api.sendMessage("️Apna kam kaR thaRki SaliyaaA-😐🖐️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Kìrâñ") || (event.body.toLowerCase() == "kìrâñ")) {
     return api.sendMessage("️Owner meRi hai 🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kase ho") || (event.body.toLowerCase() == "kasi ho")) {
     return api.sendMessage("️Main ThEk Ap Kase Ho❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bagh") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "marry me") || (event.body.toLowerCase() == "mujhe bhi shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Wase Tujhe Daga Kon🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "assalamualaikum G kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Me ThEk Ap Kase ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "usne mujhe love you bola") || (event.body.toLowerCase() == "love you bola usne")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bole Ga🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "I'm Agya") || (event.body.toLowerCase() == "I'm agya")) {
     return api.sendMessage("️𝐖𝐞𝐥𝐥𝐜𝐨𝐦 𝐁𝐨𝐬𝐬 :> 🩵🪽", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bf") || (event.body.toLowerCase() == "Bf")) {
     return api.sendMessage("️𝐌𝐄𝐑𝐄 𝐋𝐈𝐘𝐄 𝐁𝐅 𝐊𝐀 𝐌𝐀𝐓𝐋𝐀𝐁 𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐍𝐇𝐈 𝐁𝐑𝐄𝐀𝐊-𝐅𝐀𝐒𝐓 𝐇𝐎𝐓𝐀 𝐇𝐀𝐈 🍳😋😋", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "meRi jan ho") || (event.body.toLowerCase() == "tm meRi jan ho")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ".uns") || (event.body.toLowerCase() == ".Unsend")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ".und") || (event.body.toLowerCase() == "unsend")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "dekh mera demag khrab na kr") || (event.body.toLowerCase() == "demag khrab na kr")) {
     return api.sendMessage("️Chal Dafa Hoja fir Edr Sa Muj Sa Bat Na Kr🤬", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️𝑲𝑨𝑺𝑬 𝑯𝑶 𝑨𝑷..?", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rahe ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia kR Rhe Ho", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "diwani 😔")) {
     return api.sendMessage("️aisa q hota hai jisko ham sab c zada piyar karte hai unko hi ham sab c zada hurt karte hai phir unko hurt kar ke khud bhi apne andar hurt hote rehte hain..🥀✨🖤 (𝑴𝑻𝑿💚✨)", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "axha") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN G Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kuch nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️ axha Kuch Kr Liya Kro Naw 🤣", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kia karo") || (event.body.toLowerCase() == "kia karo yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == ". pAir") || (event.body.toLowerCase() == ".pair")) {
     return api.sendMessage("️𝑷𝑬𝑯𝑳𝑬 𝑵𝑨𝑪𝑯 𝑷𝑯𝑰𝑹 𝑩𝑨𝑵𝑨𝑶𝑮𝑰 𝑻𝑬𝑹𝑨 𝑷𝑨𝑰𝑹 😛😛", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "gf chor gai") || (event.body.toLowerCase() == "gf bhag gai")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To  Tu Q Ro Rha 😁", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "kiran") || (event.body.toLowerCase() == "Kiran")) {
     return api.sendMessage("Facebook OWNER Kìrâñ Queen 👑", threadID);
   };

  if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁")) {
     return api.sendMessage("dant saaf kr apna 😹:))", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️ankh na maar aby tharki 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "meRi bot") || (event.body.toLowerCase() == "meRi jan")) {
     return api.sendMessage("itni sasti nai Main:))", threadID);
   };
   if ((event.body.toLowerCase() == " q") || (event.body.toLowerCase() == "waja")) {
     return api.sendMessage("Bs ASy He Yr Dill Nhi KrTa Naw🤕 :))", threadID);
   };

   if ((event.body.toLowerCase() == "aja haweli pe") || (event.body.toLowerCase() == " ao chalte hain")) {
     return api.sendMessage("NhI Main Nhi Jaaun Ga Ap Jao:))", threadID);
   };

   if ((event.body.toLowerCase() == " tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya 🙂:))", threadID);
   };

   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("kya hwa hiran kyn ho gy jawan❤️ :))", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬")) {
     return api.sendMessage("kis ki baja di))", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡")) {
     return api.sendMessage("uzair ne roka hai warna tere gusse ki or teri aho aho😡:))", threadID, messageID);
   };

if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage(" Gali dena buri bat ha ab gali nai dani warna rrrr🤬 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭")) {
     return api.sendMessage("kya huaa jaan g roh kyn raha ap🥺 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐")) {
     return api.sendMessage("mera smny muh bend gud bacha🤧:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hyee Dil ni do sharm ati hai🙆🙈 :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("yah fake smile hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("tujy maaf nai kron gha ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("sadkye tera dil wala muh py", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Allah Hafiz ❤️ Take care 😘 ByE ByE TaTta:))", threadID);
   };

  if ((event.body.toLowerCase() == "meRi zindagi") || (event.body.toLowerCase() == "meRa pyar")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You ♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("upr amb pak raha nachy daikh", threadID);
   };

    if ((event.body.toLowerCase() == "amna") || (event.body.toLowerCase() == "rahima")) {
     return api.sendMessage("innocent bachi hai❤️", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("muh band kr makhi chala jaye gi😠", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("mujy be chumi chheya ", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("sach ma bandrr he hai", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Radhe Radhe 🙏 ❤️ Bola kro Okay Rutik💚✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Muhh tum ko koi lgata ni Or Emoji dekho Send kiYa 😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Ally Ally MeLi JawN RootY NOi HN🥺🙆🙄:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Abby kya soch raHa hai pateely jasi shkal ha🙊😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gud night")) {
     return api.sendMessage("️good night Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jaan")) {
     return api.sendMessage("️GG Bolo meRe baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "Gm")) {
     return api.sendMessage("️Ghar walo ki galiya sun ke aye ho ", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "🌛") || (event.body.toLowerCase() == "🌛")) {
     return api.sendMessage("️𝐓𝐮𝐦 𝐉𝐨 𝐊𝐞𝐡 𝐃𝐨 𝐓𝐰 𝐂𝐡𝐚𝐧𝐝 𝐓𝐚𝐫𝐞 𝐁𝐡𝐢 𝐓𝐨𝐫𝐡 𝐋𝐚𝐮𝐧𝐠𝐢 𝐌𝐞..🫣🪽", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

  if ((event.body.toLowerCase() == "aslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };

if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage("𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨", threadID, messageID);
   };

if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi har har Mahadev ❤️🙏Bola kro Okay 💖  ꜛ 3:) 𓆩𝐔ȥ͜͡ʌı͛ɼ̽ 🤍✨", threadID);
   };

  if ((event.body.toLowerCase() == "king uzair") || (event.body.toLowerCase() == "KING UZAIR")) {
     return api.sendMessage("mtx uzair king bola karo 🤬🤬🤬", threadID);
   };

  if ((event.body.toLowerCase() == " kis ki ha") || (event.body.toLowerCase() == "janu kis ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ?  bss rutik ki hai🤧", threadID);
   };

  if ((event.body.toLowerCase() == "nusaiba mirzan") || (event.body.toLowerCase() == "@Nʋsʌɩɓʌ Mɩʀʑʌŋ")) {
     return api.sendMessage("uzair ki hai Yawr🥺", threadID);
   };

  if ((event.body.toLowerCase() == "Shaan") || (event.body.toLowerCase() == "shan")) {
     return api.sendMessage("SHAAN KING FACEBOOK OWNER ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "Nusaiba") || (event.body.toLowerCase() == "nusaiba")) {
     return api.sendMessage("AWESOME BACHI FROM BANGLADESH 🇧🇩", threadID);
   };

  if ((event.body.toLowerCase() == "Uzii") || (event.body.toLowerCase() == "uzii")) {
     return api.sendMessage("MASOOM HAI BECHARA 😌", threadID);
   };

   if ((event.body.toLowerCase() == "uz") || (event.body.toLowerCase() == "uz")) {
     return api.sendMessage("ADMIN IS GROUP KI RONAK 💫", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛")) {
     return api.sendMessage("😛", threadID);
   };

   if ((event.body.toLowerCase() == "Shoni") || (event.body.toLowerCase() == "shoni")) {
     return api.sendMessage("Damn you, shame on hahaha", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "bye.") || (event.body.toLowerCase() == "By.")) {
     return api.sendMessage("Bye ni bolna Next Okk Allah Hafiz bolty Hn 🙆😒❤️🥺", threadID);
   };

   if ((event.body.toLowerCase() == "queen.") || (event.body.toLowerCase() == "Queen.")) {
     return api.sendMessage("10 din se nahi nai or name queen rakha hua hai🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("𝗠𝗲𝗹𝗹𝘆 𝗯𝗮𝗯𝘆 𝗸𝗼 𝘀𝗵𝗮𝗺𝗼 𝗮 𝗿𝗵𝗲 𝗵𝗲..😾😾😾", threadID);
   };
  if ((event.body.toLowerCase() == "sim lanti") || (event.body.toLowerCase() == "sim lannati")) {
     return api.sendMessage("️Same to you Chup Kr K Bay🙄", threadID, messageID);
   };

if ((event.body.toLowerCase() == "sim miss you yr") || (event.body.toLowerCase() == "sim miss you")) {
     return api.sendMessage("️miss you Too MaRi Jan😘", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim mujhse shadi karogi") || (event.body.toLowerCase() == "sim mujhe tumse shadi kRni hai")) {
     return api.sendMessage("️kab krNi Ya Btao🥰😍", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim abi kr lo") || (event.body.toLowerCase() == "sim aj krni hai")) {
     return api.sendMessage("️OH? Itni Jalde Nhi Yr Kuxh Din Bad KrTy Hain", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "hug") || (event.body.toLowerCase() == "Hug")) {
     return api.sendMessage("️ider nai oye sb hain🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "sim kiss do")) {
     return api.sendMessage("️UmmmaH😘 MaRi JaN BaSh🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️OH? Itni", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "gando") || (event.body.toLowerCase() == "gando hai")) {
     return api.sendMessage("️tara BaP GhaNdu GhaShti Ma K BaChy😡", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim where are you from") || (event.body.toLowerCase() == "sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim bangladesh ke log kase hain") || (event.body.toLowerCase() == "sim or Bangladesh ke log")) {
     return api.sendMessage("️Wo B Bht Axhe Hain Bs Kuch LoG Axhe Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim your age") || (event.body.toLowerCase() == "sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim nice yr") || (event.body.toLowerCase() == "sim nice")) {
     return api.sendMessage("️shukriya", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "×sim yr mujhe gf chahiye") || (event.body.toLowerCase() == "×sim mujhe ak gf chahiye")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim ak gf dund do") || (event.body.toLowerCase() == "sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim who are you") || (event.body.toLowerCase() == "sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sim or btao") || (event.body.toLowerCase() == "sim or btao Kuch")) {
     return api.sendMessage("️Kia btao Ab😅", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "❥||ㅎ{name}☆||  ⋆⃝❥͜͡"

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `╔═════▓࿇💚࿇▓═════╗\n        ${name}\n╚═════▓࿇💚࿇▓═════╝\n\n●▬ൠൠ▬𝙊𝙬𝙣𝙚𝙧▬ൠൠ▬●\n\n◈━━━━⎯꯭𝁂꯭꯭꯭֯✰🩷꯭꯬꯭𓆩〭ͥ〬 ⃪ᷟ꯬༏❤️𝆺𝅥Ʀ𝐮𝐭𝐢𝐤𝆺𝅥🫰❤️⎯꯭̽𝆭⎯━━━━━◈\n\n\n${rand}\n\n\n◈━━━━ᴅᴇᴡᴀɴɪ𝐱͜͡ᴆ━━━━━◈` 
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }