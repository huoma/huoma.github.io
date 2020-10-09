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
    lrcType: 1, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [{ 
      name: '稍息立正站好',
      artist: '范晓萱',
      cover: 'https://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/5513f311e612912ed77276103466308a/0dd62106704fcc2119b4b6543a91c5fb',
      url: 'https://sharefs.yun.kugou.com/202009301038/08486dc01a93f94bbd72981c93c46cb1/G053/M08/0E/09/FZQEAFaLwaKAeJuWADARjgiLn2o645.mp3',
      lrc: '[00:00.00]歌曲名 稍息立正站好 歌手名 范晓萱\n[00:01.00]作词：许常德\n[00:02.00]作曲：织田哲郎\n[00:17.30]抠牙齿书没背晚回家\n[00:20.60]人人多少都有些坏习惯\n[00:24.20]今天这样明天一样怎么办\n[00:27.65]我总不能永远这样会完蛋\n[00:31.65]下定决心把缺点打倒\n[00:35.00]不怕跌倒信心最重要\n[00:38.75]我们都是这样长大\n[00:44.10]稍息立正站好\n[00:45.80]霹雳啪啦呼噜哗啦铅笔\n[00:48.40]找不到\n[00:49.25]铿铿锵锵乒乒乓乓上课\n[00:51.80]又迟到\n[00:52.70]呜吗吗呼呼哈哈做事\n[00:55.20]不能一团糟\n[00:58.35]稍息立正站好\n[01:00.05]霹雳啪啦呼噜哗啦这次会更好\n[01:03.25]铿铿锵锵乒乒乓乓人小\n[01:05.90]志气高\n[01:06.95]呜吗吗呼呼哈哈临时\n[01:09.40]抱不到佛脚\n[01:14.25]抠牙齿书没背晚回家\n[01:17.35]人人多少都有些坏习惯\n[01:20.95]今天这样明天一样怎么办\n[01:24.50]我总不能永远这样会完蛋\n[01:28.25]下定决心把缺点打倒\n[01:31.85]不怕跌倒信心最重要\n[01:35.60]我们都是这样长大\n[01:40.95]稍息立正站好\n[01:42.55]霹雳啪啦呼噜哗啦铅笔找不到\n[01:45.85]铿铿锵锵乒乒乓乓上课\n[01:48.65]又迟到\n[01:49.55]呜吗吗呼呼哈哈做事\n[01:52.15]不能一团糟\n[01:55.15]稍息立正站好\n[01:56.75]霹雳啪啦呼噜哗啦\n[01:58.80]这次会更好\n[02:00.10]铿铿锵锵乒乒乓乓人小\n[02:02.75]志气高\n[02:03.70]呜吗吗呼呼哈哈\n[02:05.80]临时抱不到佛脚\n[02:15.64]下定决心把缺点打倒\n[02:18.94]不怕跌倒信心最重要\n[02:22.69]我们都是这样长大\n[02:28.04]稍息立正站好\n[02:31.42]霹雳啪啦呼噜哗啦铅笔\n[02:33.87]找不到\n[02:34.77]铿铿锵锵乒乒乓乓上课\n[02:37.42]又迟到\n[02:38.27]呜吗吗呼呼哈哈做事\n[02:40.92]不能一团糟\n[02:44.02]稍息立正站好\n[02:45.67]霹雳啪啦呼噜哗啦\n[02:47.67]这次会更好\n[02:48.97]铿铿锵锵乒乒乓乓人小\n[02:51.67]志气高\n[02:52.67]呜吗吗呼呼哈哈临时\n[02:55.17]抱不到佛脚\n[02:58.15]稍息立正站好\n[02:59.85]霹雳啪啦呼噜哗啦这次\n[03:02.20]会更好\n[03:03.20]铿铿锵锵乒乒乓乓人小\n[03:05.75]志气高\n[03:06.85]呜吗吗呼呼哈哈临时\n[03:09.30]抱不到佛脚',
      theme: '#ebd0c2'
    }
    ]
  });

  ap.lrc.hide()
