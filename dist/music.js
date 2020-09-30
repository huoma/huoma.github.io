const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 90, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [{ 
      name: '稍息立正站好',
      artist: '范晓萱',
      cover: 'https://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/5513f311e612912ed77276103466308a/0dd62106704fcc2119b4b6543a91c5fb',
      lrc: 'https://app.onenine.cc/m/api/lrc/migu/id/d24dSVwtIuyBIGXGKLpHE4hZR65_ajGpwSdaX8FTDBmFartiNcCluAry8jmqNdWwXb1nzDRpUtDRiqhoK6QxfH80gRQhwiRan4yTMkWpbLxrJVsZjbmiNOHZLCPvJQC0lrvE3RGclu9lpknkSTkB9SCoBsCLigqJ2TA4ExLeHQ/name/%E7%A8%8D%E6%81%AF%E7%AB%8B%E6%AD%A3%E7%AB%99%E5%A5%BD%20-%20%E8%8C%83%E6%99%93%E8%90%B1.lrc',
      url: 'http://218.205.239.34/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=SQ&netType=00&copyrightId=0&contentId=600902000009542002&resourceType=E&channel=0',
      theme: '#ebd0c2'
    }
    ]
  });

  