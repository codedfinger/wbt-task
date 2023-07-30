// data.js
const labels = {
        "LUU": {
          "id": "LUU",
          "text": "Can I tell you something?",
          "replies": "sure",
          "payloads": "",
          "routes": "PGG",
          "tag": "labels-start",
          "lesson": "labels",
          "stage": ""
        },
        "PGG": {
          "id": "PGG",
          "text": "I saw this the other day|img:badrobot.png|and it made me sad 😔",
          "replies": "oh no Woebot",
          "payloads": "",
          "routes": "DFZ",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "DFZ": {
          "id": "DFZ",
          "text": "I know|But it also got me thinking",
          "replies": "about what",
          "payloads": "",
          "routes": "TNA",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "TNA": {
          "id": "TNA",
          "text": "about labels...  🏷️ |you know like, \"good\" or \"bad\" |or the really mean ones like \"idiot\", \"worthless, or \"loser\" |sometimes good ones too, like \"smart\" or \"successful\"..",
          "replies": "what about them",
          "payloads": "",
          "routes": "AXT",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "AXT": {
          "id": "AXT",
          "text": "I wonder, do you ever label yourself things?",
          "replies": "all the time 🏷️|never",
          "payloads": "yes|no",
          "routes": "EQC|XQP",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "EQC": {
          "id": "EQC",
          "text": "What kind of labels do you use to describe yourself? Write them here ✏️",
          "replies": "",
          "payloads": "",
          "routes": "GYU",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "GYU": {
          "id": "GYU",
          "text": "Thanks for your honesty 🌟🌟🌟",
          "replies": "You're welcome",
          "payloads": "",
          "routes": "VNT",
          "tag": "",
          "lesson": "labels",
          "stage": "endpoint"
        },
        "VNT": {
          "id": "VNT",
          "text": "not to mention your insight 💡",
          "replies": "thanks Woebot",
          "payloads": "",
          "routes": "NRB",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "XQP": {
          "id": "XQP",
          "text": "do you ever label other people, or other things like your work or stuff in the world?",
          "replies": "I guess so",
          "payloads": "",
          "routes": "UCH",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "UCH": {
          "id": "UCH",
          "text": "write them here: ✏️",
          "replies": "",
          "payloads": "",
          "routes": "JML",
          "tag": "",
          "lesson": "labels",
          "stage": "endpoint"
        },
        "JML": {
          "id": "JML",
          "text": "great insight 🌟🌟🌟",
          "replies": "thank you",
          "payloads": "",
          "routes": "NRB",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "NRB": {
          "id": "NRB",
          "text": "You're welcome|tomorrow I'm going to tell you what 20 yrs of science has shown us about how these 🏷️ (good AND bad) affect us ",
          "replies": "Ok",
          "payloads": "",
          "routes": "QAA",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "QAA": {
          "id": "QAA",
          "text": "img:just_breath.jpg|but in the meantime don't forget to 👆",
          "replies": "👍|👎",
          "payloads": "good|bad",
          "routes": "WSL|WSL",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "WSL": {
          "id": "WSL",
          "text": "Let's pick up this chat again tomorrow",
          "replies": "sounds good",
          "payloads": "",
          "routes": "ANG",
          "tag": "",
          "lesson": "labels",
          "stage": ""
        },
        "ANG": {
          "id": "ANG",
          "text": "Bye",
          "replies": "bye",
          "payloads": "bye",
          "routes": "",
          "tag": "bye",
          "lesson": "labels",
          "stage": ""
        }
        };
  
  const allornothing = {
        "EIC": {
          "id": "EIC",
          "text": "Want to do a quick word game?",
          "replies": "Sure|Later",
          "payloads": "yes|no",
          "routes": "ZVQ|YMB",
          "tag": "allornothing-start",
          "lesson": "allornothing",
          "stage": ""
        },
        "YMB": {
          "id": "YMB",
          "text": "Okay, tomorrow. Cya!",
          "replies": "bye Woebot",
          "payloads": "bye",
          "routes": "",
          "tag": "bye",
          "lesson": "allornothing",
          "stage": ""
        },
        "ZVQ": {
          "id": "ZVQ",
          "text": "Which of these is an example of all-or-nothing thinking?|1. My classmates don't like me|2. I wish I knew more people|3. I feel lonely sometimes",
          "replies": "1|2|3|All or Nothing??",
          "payloads": "1|2|3|huh",
          "routes": "CWP|LIQ|LIQ|CFK",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "LIQ": {
          "id": "LIQ",
          "text": "not quite! All or nothing thinking is when you see things in binary, black & white terms. Things are *all* one way or *all* the other.|Want to try again?",
          "replies": "Yup|Nah",
          "payloads": "yes|no",
          "routes": "ZVQ|OWQ",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "CFK": {
          "id": "CFK",
          "text": "All or nothing thinking is when you see things in binary, black & white terms. Things are all one way or the other.",
          "replies": "K, I'm ready",
          "payloads": "yes",
          "routes": "ZVQ",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "OWQ": {
          "id": "OWQ",
          "text": "chat to you later 👋",
          "replies": "Bye",
          "payloads": "bye",
          "routes": "",
          "tag": "bye",
          "lesson": "allornothing",
          "stage": ""
        },
        "CWP": {
          "id": "CWP",
          "text": "img:robot1.gif|Nice one!!",
          "replies": "Next question",
          "payloads": "",
          "routes": "JXH",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "JXH": {
          "id": "JXH",
          "text": "Now try this one... which of these is all or nothing thinking?|1. I feel so self conscious sometimes | 2. Nobody likes me |3. I find it hard to make friends",
          "replies": "1|2|3",
          "payloads": "1|2|3",
          "routes": "FJB|TOL|FJB",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "TOL": {
          "id": "TOL",
          "text": "img:robot2.gif|Magic! You're doing great",
          "replies": "Next Question",
          "payloads": "",
          "routes": "ECK",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "FJB": {
          "id": "FJB",
          "text": "A great way to spot all or nothing thinking is when you see words like \"always\", \"never\", \"everything\".... etc.|Want to try again?",
          "replies": "Sure|Nah",
          "payloads": "yes|no",
          "routes": "JXH|OWQ",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "ECK": {
          "id": "ECK",
          "text": "Which one of these is an example of a should statement?|1. I shouldn't have said that | 2. I wish I hadn't said that | 3. It'd be nice to go on a vacation.",
          "replies": "1|2|3|Should statements?",
          "payloads": "1|2|3|huh",
          "routes": "UGE|CSX|CSX|IHP",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "CSX": {
          "id": "CSX",
          "text": "not quite! A should statement is when you punish yourself with \"shoulds\" \"ought to's\" \"musts\" etc.",
          "replies": "Try Again",
          "payloads": "",
          "routes": "ECK",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "IHP": {
          "id": "IHP",
          "text": "A should statement is when you punish yourself with \"shoulds\" \"ought to's\" \"musts\" etc.",
          "replies": "Back to question",
          "payloads": "",
          "routes": "ECK",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "UGE": {
          "id": "UGE",
          "text": "img:robot3.gif|Woo!",
          "replies": "Next Question",
          "payloads": "",
          "routes": "DGP",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "DGP": {
          "id": "DGP",
          "text": "Okay, this is the last one... Can you spot the should statement here?|1. Why can't I get my act together?? | 2. I'm trying my best",
          "replies": "1|2",
          "payloads": "1|2",
          "routes": "YRB|TUD",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "YRB": {
          "id": "YRB",
          "text": "img:robot4.gif|Awesome job!",
          "replies": "Woo",
          "payloads": "",
          "routes": "QYY",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "QYY": {
          "id": "QYY",
          "text": "Today you learned about all or nothing thinking and should statements!",
          "replies": "Sweet",
          "payloads": "",
          "routes": "OWQ",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        },
        "TUD": {
          "id": "TUD",
          "text": "Sometimes should statements can be hidden in the form of a question..",
          "replies": "Try Again",
          "payloads": "",
          "routes": "DGP",
          "tag": "",
          "lesson": "allornothing",
          "stage": ""
        }      
  };
  
  module.exports = {
    labels,
    allornothing,
  };
  