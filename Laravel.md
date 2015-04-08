# PHP框架Laravel学习指导

## 1. 安装

### 1. 安装Composer

* Windows下有安装包：<https://getcomposer.org/Composer-Setup.exe>	
* Linux之类的用:
	> curl -sS https://getcomposer.org/installer | php
* Linux下全局安装用:
	> curl -sS https://getcomposer.org/installer | php  
	> mv composer.phar /usr/local/bin/composer  

### 2. 用composer命令安装
	`composer global require "laravel/installer=~1.1"`
	
### 3. 服务器环境要求
	* PHP >= 5.4
	* Mcrypt PHP Extension
	* OpenSSL PHP Extension
	* Mbstring PHP Extension
 
**PS:PHP 5.5的话，请安装json库：**`apt-get install php5-json`


## 2. 简单的使用

* 然后laravel new <项目目录名称>就可以新建一个项目了
* 进入项目后，运行：php artisan serve 就可以用PHP内建的WEB服务器打开默认页面

* 主要文件目录位置：
	> 控制器在：app/Http/Controllers/*  
	> 路由器在：app/Http/routes.php  
	> 视图位于：resources/views/*  
	> 配置文件：config/*  

* 控制器语法：
	> Route::get('test','TestController@index');
	> Route::get是固定的，表示用get方式（猜测）
	> test是url中的地址
	> TestController@index：表示用TestController类中的index方法处理这个请求

* 表单的问题：
* 因为在Laravel5中，Html和Form已经不是核心组件被移除了，所以需要手工添加：
	1. 在composer.json中的requirement字段中增加:`"illuminate/html": "~5.0"`
	2. 执行Composer update更新
	3. 在config/app.php中首先在provider数组中加入:`'Illuminate\Html\HtmlServiceProvider'`
	4. 然后再aliases数组中加入下面两行：
		> 'Form'=> 'Illuminate\Html\FormFacade',  
		> 'HTML'=> 'Illuminate\Html\HtmlFacade',  
	5. 另外，现在标签的格式变成了{!!Form:text('name')!!}的形式，以前的{{}}将输出RAW字符串（也可以echo {{}}解决这个问题）。
	6. 新建控制器的问题：因为语法变动，所以需要用 `php artisan make:controller <控制器名称>` 来新建了
	

* 读取表单提交变量报错：
	> 原来是：
	Use Illuminate\Http\Request;
	请修改成;
	Use Request;
	因为现在app.php中的定义是：
	'Request'=>'Illuminate\Support\Facades\Request',
	
	> 原来是：Input::all();
	现在是：Request::all();
	
	> 列出当前路由：
	php artisan route:list


今天看到：
5.3 创建文章

来自 <https://github.com/huanghua581/laravel-getting-started/blob/master/4.2.md> 


今天开始老版本的安装
composer create-project laravel/laravel=4.1.27 your-project-name --prefer-dist
指定安装版本需要这样操作

