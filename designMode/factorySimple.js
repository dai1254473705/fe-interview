/**
 * 简单工厂模式
 * 目的：创建一个有id、name、url的图片对象:{id:xx,name:xx,url:xx}
 */
const createImageData = function (id, name, url){
    // 创建对象，对对象的属性和方法进行扩展
    var imageData = new Object();
    imageData.id = id;
    imageData.name = name;
    imageData.url = url;
    return imageData;
};
var imageData1 = createImageData(1,'586c5ac4d8514.jpg','http://pic1.win4000.com/wallpaper/d/586c5ac4d8514.jpg');
var imageData2 = createImageData(2,'586c5ac5d75d0.jpg','http://pic1.win4000.com/wallpaper/d/586c5ac5d75d0.jpg');

console.log(imageData1);
console.log(imageData2);
