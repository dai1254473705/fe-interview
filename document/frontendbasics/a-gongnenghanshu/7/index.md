# 7. 放大镜

## 原生js实现放大镜效果

### 效果图
![533895f7c5521d476e429747480d639e](./image/AC744497-7513-405C-9412-7CA3041236BD.png)

### 代码如下

```js
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>

	<style>
		img {
			width: 100%;
			height: 100%;
		}

		#s_box {
			width: 400px;
			height: 300px;
			position: relative;
			left: 100px;
			top: 100px;
		}

		#s_box .mark_box {
			width: 400px;
			height: 300px;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 10;
		}

		.position_box {
			width: 100px;
			height: 75px;
			background: #b6b6b6;
			opacity: 0.6;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			display: none;
		}



		#b_box {
			width: 400px;
			height: 300px;
			overflow: hidden;
			position: relative;
			left: 600px;
			top: -200px;
			display: none;
		}

		#b_box_all {
			position: absolute;
			width: 1200px;
			height: 900px;
			left: 0;
		}
	</style>

</head>

<body>

	<div id="s_box">
		<div class="mark_box"></div>
		<img src="1.jpg" alt="">
		<div class='position_box'></div>
	</div>
	<div id="b_box">
		<div id="b_box_all">
			<img src="1.jpg" alt="">
		</div>
	</div>
</body>
<script>
	window.onload = function () {

		var oS_box = document.getElementById('s_box');
		var oS_position = oS_box.children[2];
		var oS_mark = oS_box.children[0];
		var oB_box = document.getElementById('b_box');
		var oB_box_all = document.getElementById('b_box_all')
		oS_mark.onmouseover = function () {
			oS_position.style.display = 'block';
			oB_box.style.display = 'block';

		}
		oS_mark.onmouseout = function () {
			oS_position.style.display = 'none';
			oB_box.style.display = 'none';
		}

		oS_mark.onmousemove = function (event) {
			var evt = event

			var left = evt.offsetX - oS_position.offsetWidth / 2;
			//console.log(left)

			if (left < 0) {
				left = 0;
			} else if (left > oS_box.offsetWidth - oS_position.offsetWidth) {
				left = oS_box.offsetWidth - oS_position.offsetWidth
			}
			//console.log(left)
			oS_position.style.left = left + 'px';


			var top = evt.offsetY - oS_position.offsetHeight / 2;
			if (top < 0) {
				top = 0;
			} else if (top > oS_box.offsetHeight - oS_position.offsetHeight) {
				top = oS_box.offsetHeight - oS_position.offsetHeight
			}
			//console.log(top)
			oS_position.style.top = top + 'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX = left / (oS_box.offsetWidth - oS_position.offsetWidth);
			var proportionY = top / (oS_box.offsetHeight - oS_position.offsetHeight);

			console.log(proportionX + ':' + proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left = -proportionX * (oB_box_all.offsetWidth - oB_box.offsetWidth) + 'px';

			oB_box_all.style.top = -proportionY * (oB_box_all.offsetHeight - oB_box.offsetHeight) + 'px';

		}
	}

</script>

</html>
```

![63ddabdca82a3a02d8a9a08d38544a5c](./image/1.jpg)