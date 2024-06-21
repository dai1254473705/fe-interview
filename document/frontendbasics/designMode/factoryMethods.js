/**
 * 工厂方法模式
 * 目的：不同类型图片数据不同，处理方式不同
 */
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
