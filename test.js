// 生成GUID/UUID的函数
function guid() {
	//函数包含在函数内，这样s4的命名空间就在函数内部，不会和函数外同名的函数冲突
	function s4() {
		// Math.floor: 获得小于或者等于参数的整数
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
// sample..


console.log(
	'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
		return v.toString(16);
	})
);