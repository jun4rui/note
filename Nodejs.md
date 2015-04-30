# Nodejs及相关技术学习手册

## Nodejs环境本身

### 更新npm
用 `npm update -g npm` 即可


### 自动化处理工具: grunt, gulp
grunt的安装和配置有些混乱。首先，安装很啰嗦，官方的教程是要先 `npm install -g grunt-cli`，然后要手工配置项目目录下的packages.json文件，然后安装包和插件，最后手工编写流程代码。

相比之下gulp好太多了，首先 `npm install -g gulp` 装好以后比较简单，要添加的代码和步骤要清晰很多，不想grunt那么模糊。

