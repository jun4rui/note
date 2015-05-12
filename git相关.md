# GIT学习笔记

## git@oschina.net相关

### 安装工具、生成密钥、添加公钥到git@OSC
1. Windows下面使用Git，首先需要下载msysgit工具，[下载地址](https://msysgit.github.io/)
2. 直接跑ssh-keygen是会报告找不到HOME目录的，所以你需要在Windows的环境变量中增加一个HOME(我用的大写，小写可用否？)，然后指向到你的用户目录，例如:C:\Users\cao
3. 用这个命令 `ssh-keygen -t rsa -C "xxxxx@xxxxx.com"` 生成你的密钥，xxxx@xxxx.com 代表你的登陆邮箱
4. 然后到HOME目录下的.ssh目录查看id_rsa.pub文件，找到公钥字符串，把公钥提交到osc的git仓库
5. 输入 `ssh -T git@git.oschina.net` 测试一下是否能连上，如果有 `Welcaom to Git@OSC, yourname!` 表示成功.

### 已有项目提交到git@OSC去

原理是，在git@OSC上新建一个仓库，然后在本地项目中添加远程仓库，并将数据推送到远程仓库去：

1. 为本地项目建立git仓库：命令行估计是git init，不过在idea中可以选择菜单的VCS->Import into Version Control->Create Git Repository即可
2. 指定远程仓库：`git remote add origin http://xxxx.xxx.com/xxx.git` ，切记，如果是git@OSC，现在应该是用ssh方式了，记得在git@OSC的仓库页面选择SSH的链接，不要用HTTPS的，否则要求输入账号密码，而且怎么都会不对
3. 推送到远程仓库：`git push origin master`

	备注：
	1. 貌似推送前要`git add .`一下，把所有文件都add，然后`git commit`提交一下
	2. 有些不需要推送的文件请加入到`.gitignore`文件里面去，文本的，一行一个
	3. 可能，也许，在push前需要`git pull origin master`获取一下远程仓库的文件