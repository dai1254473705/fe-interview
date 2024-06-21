# 工厂模式

分为：简单工厂模式、工厂方法模式、抽象工厂模式

简单工厂模式
创建对象，对对象的属性和方法进行扩展并返回对象
/
\*\*

- 简单工厂模式
- 目的：创建一个有 id、name、url 的图片对象:{id:xx,name:xx,url:xx}
  \*/
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

工厂方法模式
/\*\*

- 工厂方法模式
- 目的：不同类型图片数据不同，处理方式不同
  \*/
  const ImageFactory = function (type){
  if (this instanceof ImageFactory) {
  return new this[type];
  }
  return new ImageFactory(type);
  }
  ImageFactory.prototype = {
  'nature': function(){
  this.imagesList = [
  {
  id:1,
  type: 'nature',
  name: '586c5ac4d8514.jpg',
  url: 'http://pic1.win4000.com/wallpaper/d/586c5ac4d8514.jpg'
  },
  ];
  return this.imagesList.map(function(data){
  data.tag = '自然';
  // other code ...
  return data;
  });

      },
      'animal': function(){
          this.imagesList = [
              {
                  id:2,
                  type: 'animal',
                  name: '586c5ac5d75d0.jpg',
                  url: 'http://pic1.win4000.com/wallpaper/d/586c5ac5d75d0.jpg'
              },
          ];
          return this.imagesList.map(function(data){
              data.tag = '动物';
              // other code ...
              return data;
          });
      },

  };

const animalRes = new ImageFactory('animal');
const natureRes = new ImageFactory('nature');
console.log(animalRes);
console.log(natureRes);

抽象工厂模式
通过对类的工厂抽象使业务用于对产品类簇的创建，而不负责创建某一类产品的实例。
