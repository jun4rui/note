# Python开发笔记

## 演进project

	# -*- coding:utf-8 -*-   
	#中文注释   
	
	import sys
	
	class A:
	 
		s1 = 333 #公有属性 
		__age = 0 #私有属性 
	
		def __init__(self,age): #构造器 专有函数 __开头 __结尾
			self.__age=age
			return
	
		def __del__(self): #析够 专有函数 __开头 __结尾
			
			return #函数体没内容则必须有return 否则可有可无
	
		#private
		def __doSomething(self, s): #私有函数 __开头 无__结尾
			print self.__age 
			return            
		#public
		def doSomething(self, s): #公有函数
			self.__doSomething(s)    
			print s
	
	 
	def doSomething(v):
		vv=v+1;
		return vv
	
	def main():
	 
		a=A(111) #对象 对类实例化
		a.doSomething('222')  #调用对象的公有函数
		print a.s1 #访问对象的共有属性
		print doSomething(444) #函数调用函数 同时被调用函数有返回值
	 
	
	 
	
	if __name__ == '__main__':
		main()
输出
	111
	222
	333
	445

## 1. Python虚拟环境工具Virtualenv
很简单的工具，安装也简单，就是：

	pip install virtualenv

然后用：

	virtualenv [目录名字]
	Example: virtualenv venv

就可以建立一个目录了，然后执行目录下的`activate`命令就可以激活这套环境了
