# 用Ionic来开发hybrid APP

转载自：[用Ionic开发hybrid APP](http://hicc.me/create-amazing-app-with-ionic/)  
原作者：[xiaodao](http://hicc.me/)  
请尊重版权，转载请注明来源，谢谢~~  
  
使用phonegap开发APP的优劣在此不必细说，快速，简单，跨平台，以及随着iOS，Android本身对webview优化所带来的不错的性能，便是其独有的优势。而且私以为 **在目前激烈而又变化快速的移动APP市场环境下，用phonegap来开发APP未尝不是一种低成本mvp的方案** ，快速发布，成王败寇^-^

## 为什么选用ionic

其中[ionicframework](http://ionicframework.com/)便是phonegap开发hybrid APP技术中的一员新秀，甚至可以说是一员虎将，而且免费且开源。

Ionic的优势非常显著：

* 性能优异
* 基于红的发紫[AngularJs](https://angularjs.org/)
* 漂亮的UI
* 强大的命令行(基于更热门的nodejs)
* 开发团队非常活跃，
* 相关配套非常齐全：
	* 相对充足的学习资料，Learn Iconic,The Iconic book
	* ngcordova，将主流的Cordova API或者Cordova插件封装为AngularJS扩展，使用非常方便。
	* 开源免费的webfont icon库ionicons,基本满足你icon需求。
	* 甚至最近开发出的可视化开发工具Ionic Creator
* 最后便是至关重要的，异常活跃的在线社区。

## 安装使用

官网的[使用教程](http://ionicframework.com/getting-started/)完全足够。

	$ npm install -g cordova ionic
	$ ionic start myApp tabs
	$ cd myApp
	$ ionic platform add ios
	$ ionic build ios
	$ ionic emulate ios

以及私人推荐的电脑浏览器调试命令：`$ ionic searve`

## 相关插件扩展推荐

- SQLite插件，如果你的APP需要持久保存用户数据，强烈推荐你使用SQLite来存储数据（localstorage中数据很容易被系统，或者一些坑爹系统清理软件删除）
	- Hipo所使用的[brodysoft的Cordova-SQLitePlugin](https://github.com/brodysoft/Cordova-SQLitePlugin)，以及集成到ionic中的[代码示例](https://gist.github.com/yijian166/69bd5cbc5c82387f1ac1)。
	- 上述提高的ngcordova所提供的[SQLite](http://ngcordova.com/docs/plugins/sqlite/)插件(才发现，两者背后的都是同样的Cordova插件，只是集成方式不一样，那边推荐后者)
- 键盘插件：[$cordovaKeyboard](http://ngcordova.com/docs/plugins/keyboard/)，开发过hybrid APP都知道，使用表单时键盘的弹起/关闭中会引来很多问题，Ionic之前的方案都是js实现，效果实难恭维，上述插件以原生代码的方式来优化这个问题，亲测效果很好，也强烈推荐你使用这个插件。
- 启动图片(或称闪屏)插件：[$cordovaSplashscreen](http://ngcordova.com/docs/plugins/splashscreen/)，之所以推荐也必装这个插件的原因是，默认情况下启动图片时间停留较短，如果你的APP在这段时间没有完成数据加载或者视图渲染等(需要查询SQLite数据库，或者更甚者请求服务器)就需要自定义启动图片的关闭，那么就需要安装这个插件，否则就又会在启动时候有屏幕闪动的影响体验的问题。
	- 需要提示的是，安装插件后，在启动图片未关闭时候，默认菊花转在屏幕中间，如果你要自定义，可以更改插件中的原生代码，以iOS为例,将其改到屏幕底部：更改/src/ios/CDVSplashScreen.m中_activityView.center = CGPointMake(parentView.bounds.size.width / 2, parentView.bounds.size.height / 2 );这行为：_activityView.center = CGPointMake(parentView.bounds.size.width / 2, parentView.bounds.size.height - 80 );
- 值得注意的iOS8中的TouchID也可以在hybrid APP中使用了，[$cordovaTouchID](http://ngcordova.com/docs/plugins/touchID/)

上述推荐仅仅是自己在开发过程中的一点经验之谈，还是建议需得根据自己APP实际情况选用自己需要的插件。
