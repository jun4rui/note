# 如何假设Nginx和Python环境

##1. Nginx反向代理

其实主要很简单的在Nginx的配置文件里面加入proxy_pass段就好了，例如：

	location / {
	    #root   html;
	    #index  index.html index.htm;
	    proxy_pass  http://www.htyou.com;
	}

##2. uWSGI服务器(这东西不支持Windows的，其实支持Windows的Cygwin环境但是和不支持差不多)
安装也很简单，就是:

	pip install uWSGI
就好了

##3. Gunicorn服务器（这个也不支持Windows！）
安装还是：

	pip install gunicorn
就好


# 因为必须走UNIX系统，这条路目前在华天旅游网上暂时走不下去了，暂停到这里
