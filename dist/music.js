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
      lrc: 'https://github.com/huoma/huoma.github.io/blob/master/lrc/稍息立正站好范晓萱.lrc',
      //url: 'https://sharefs.yun.kugou.com/202009301038/08486dc01a93f94bbd72981c93c46cb1/G053/M08/0E/09/FZQEAFaLwaKAeJuWADARjgiLn2o645.mp3',
      url: 'http://music.xf1433.com/up/view.php/492f81fd99dd7062927e4164ea68f88d.mp3',
      theme: '#ebd0c2'
    }
    ]
  });

  