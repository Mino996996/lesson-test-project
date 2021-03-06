export const sampleContent = [
  {
    id:1, date:'2021/5/30 12:00', contentType:1, order:1, time:5, bgm:'春の海',
    talkTheme:'餃子の話', talkScript:'美味しい焼き方おしえて', mainSpeaker:[1],
    memo:'テンション高めに', groupId:1
  },
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:3, date:'2021/7/1 13:00', contentType:3, order:4, time:40,
    talkTheme:'ふつおた', mainSpeaker:[3,4], groupId:2
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  { //エラー用:contentTypeなし
    id:5, date:'2021/6/1 13:00', order:4, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  },
  { //エラー用:groupIdなし
    id:7, date:'2021/6/1 13:00', contentType:6, order:0
  },
  { //エラー用:dateなし
    id:8, contentType:6, order:0, groupId:1
  },
  {
    id:9, date:'2021/6/1 13:00', contentType:6, order:0, groupId:2
  },
];

export const sampleNoErrorData = [
  {
    id:1, date:'2021/5/30 12:00', contentType:1, order:1, time:5, bgm:'春の海',
    talkTheme:'餃子の話', talkScript:'美味しい焼き方おしえて', mainSpeaker:[1],
    memo:'テンション高めに', groupId:1
  },
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:3, date:'2021/7/1 13:00', contentType:3, order:4, time:40,
    talkTheme:'ふつおた', mainSpeaker:[3,4], groupId:2
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  },
  {
    id:9, date:'2021/6/1 13:00', contentType:6, order:0, groupId:2
  },
];

export const okData1 = [
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  }
];

export const okData2 = [
  {
    id:1, date:'2021/5/30 12:00', contentType:1, order:1, time:5, bgm:'春の海',
    talkTheme:'餃子の話', talkScript:'美味しい焼き方おしえて', mainSpeaker:[1],
    memo:'テンション高めに', groupId:1
  },
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  }
];

export const okData3 = [
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  },
  {
    id:9, date:'2021/6/1 13:00', contentType:6, order:0, groupId:2
  },
];

export const ngData1 = [
  {
    id:2, date:'2021/6/1 13:00', contentType:1, order:1, time:5, bgm:'エーデルワイス',
    talkTheme:'みかんの話', talkScript:'皮が厚いとおもったら伊予柑だった', mainSpeaker:[],
    memo:'テンション高めに', groupId:1
  },
  {
    id:3, date:'2021/7/1 13:00', contentType:3, order:4, time:40,
    talkTheme:'ふつおた', mainSpeaker:[3,4], groupId:2
  },
  {
    id:4, date:'2021/6/1 13:00', contentType:4, order:3, groupId:1
  },
  { //エラー用:contentTypeなし
    id:5, date:'2021/6/1 13:00', order:4, groupId:1
  },
  {
    id:6, date:'2021/6/1 13:00', contentType:6, order:0, groupId:1
  },
  { //エラー用:groupIdなし
    id:7, date:'2021/6/1 13:00', contentType:6, order:0
  },
  { //エラー用:dateなし
    id:8, contentType:6, order:0, groupId:1
  },
  {
    id:9, date:'2021/6/1 13:00', contentType:6, order:0, groupId:2
  },];
