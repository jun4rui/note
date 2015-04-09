#那些我希望在一开始使用 Zsh(oh-my-zsh) 时就知道的
Apr 8, 2015

嗯，不能免俗的用了这么个标题。但是它表达了我的真实想法。

其实我已经用了 fish shell 快半年了， 因为一些原因最近又用回了 zsh + oh-my-zsh。

zsh + oh-my-zsh 配合是真心好用，而且 oh-my-zsh 还偷偷干了很多人不知道的事，比如 rake task 也能补全，第一次见到时真是有点惊讶。好吧，下面说一说我希望一开始就知道的。

插件体系
其实我用了 oh-my-zsh 快三个月后才知道原来他自带了很多插件没有开启。。。

如何开启？找到 ~/.zshrc 有一行 plugins=(git)，想加什么插件就把名字放里面就是了， 比如plugins=(rails git ruby) 就开启了rails，git 和 ruby 三个插件。 更多插件请进入 ~/.oh-my-zsh/plugins文件夹探索， 也可以看看 wiki 里的 Plugins Overview， 每个人的需求不一样，每个插件试试总能找到惊喜。里面有一些比较神奇的插件，比如敲两下esc 它会 给你自动加上 sudo 的 sudo 插件，让复制显示进度条的cp插件，解压用的 extract 插件（有没有觉得 在命令行下敲一大堆选项才能解压有点奇怪？我也觉得），vi 粉的vi-mode 等等…

##z
嗯，这也是个自带的但是没有开启的插件。为什么单独把它拿出来讲呢？因为他妈的太好用了， 没有它我根本就不想用命令行。简直就是可以无脑跳跃，比如你经常进入~/Documents目录， 按下 z doc 一般它就可以跳进去了(当然首先你得用一段时间让它积累一下数据才能用)。 类似的插件还有好几个比如atujump,fasd，这里有个完整列表：https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview#fs-jumping

##d
在 fish shell 里你可以按alt 加左右箭头随意穿梭于历史记录中，就像 GUI 文件浏览器的 前进，后退。zsh 没有这么好用，按一下 d 再回车你会看到一些东西。也是非常好用的。

##ls
每次按 ls 再按回车？这个感觉就像是敲clear而不是ctrl-L去清屏， Don’t Repeat Yourself，按 alt+L。

##zsh-autosuggestions
官方的介绍是Fish-like fast/unobtrusive autosuggestions for zsh.，没错，这是模仿 fish shell 的一个插件，虽然模仿的不完美，但是还可以用。没有这个东西让我感觉自己 很盲目。没有用过 fish 的同学可能觉得它有点奇怪，但是一旦适应它以后就会发现它会大幅度的提高效率。 注意：它不是 oh-my-zsh 自带的，大家可以去 github 看它的安装说明。

##Git Aliases
git 插件是默认开启的，大家可能注意到它能够自动补全以及显示所在 branch。 对于一个 git 重度用户，一些 aliases 是不可缺少的。相信我，一旦习惯了 aliases， 就会觉得原来敲那么一大堆命令真是不能忍了(即使它能够自动补全)。下面列一些我最常用的（当然也是 oh-my-zsh 自带的）：

Alias|Command
----|----
g|git
gst|git status
ga|git add
gp|git push
gc|git commit -v
gc!|git commit -v --amend

更多请看 [wiki](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git#aliases)

##zsh_stats
敲 zsh_stats 可以看到你的使用频率前 10 的命令是什么！

##wiki
官方 [wiki](https://github.com/robbyrussell/oh-my-zsh/wiki) 上面给出了很多有用的功能介绍， 比如一些 aliases，像..., .... 等等。

如果完整的看完了 wiki 的话我前面的介绍都是废话了。

结语
oh-my-zsh 太慢了？请换 SSD。每次看到别人不停的做什么精简优化系统的甚至编译内核榨干系统 性能的时候（以前我也是这样，直到买了个 SSD），我只会建议他买个 SSD 和 内存条。 人生苦短，能花钱的时候就不要花时间。

推荐一个不相关的：[trash-cli](https://github.com/andreafrancia/trash-cli)，就是命令行版的 回收站，它的神奇之处在于不是简单的把文件移动到回收站，而且可以在回收站里恢复。所以它说自己是 Command line interface to the freedesktop.org trashcan，我的 zshrc 里有一行：alias rm="trash-put"

其他的一些非常有用的 tips 想到再补充。

转载请著名出处，原文链接：(http://www.jiang-di.org/tools/2015/04/08/i-hope-know-when-first-use-zsh.html)
