window.onload = function (){
    
    this.keysDom = function (){
        const div = document.createElement('div');
        let len = 0;
        for (let key in div){
            len ++;
        }
        console.log(len);

     }
     this.keysDom();
}