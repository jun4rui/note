/**
 * Created by cao on 2015/4/8.
 */

var teststr = 'http://static.cnbetacdn.com/thumb/mini/article/2015/0408/ed1a6d726b24003.jpg_100x100.jpg http://static.cnbetacdn.com/thumb/mini/article/2015/0408/83b14cd8a1dd331_100x100.png http://static.cnbetacdn.com/thumb/mini/article/2015/0408/559b8a56a91339e_100x100.jpg http://static.cnbetacdn.com/thumb/mini/article/2015/0408/c69306a59afc8f7_100x100.jpg http://static.cnbetacdn.com/thumb/mini/article/2015/0408/c69306a59afA SDc8f7_100x100.jpg http://static.cnbetacdn.com/thumb/mini/article/2015/0408/c69306a59afc8f7_100x100.jpg 测试测试就是为了测试而而已 不看这个看什么啊？ 1237812987adjklsfhlajkshdfklKLJHASDJKLHAKLJSHD';

//var teststr    = "QQ:13762338415";

console.log(teststr.replace(/(http:\/\/[\/\.\w]+.[jpg|png|gif]+)/g, "[img]$1[/img]"));
teststr.toString()
