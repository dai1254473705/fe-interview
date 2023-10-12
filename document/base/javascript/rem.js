function setRem() {
	var uiSize = 750;//设计稿尺寸 750、640
	var width = document.documentElement.clientWidth || window.innerWidth;
	var fontSize = (width / uiSize) * 100;
	document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
}
setRem();
window.onresize = function() {
	setRem();
}