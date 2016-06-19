# angular-flexText
自适应高度文本框

---

`angular` `textarea`  `auto height`

## 安装

- npm install
- bower install
- gulp build

## 例子


```html
<body ng-app="myApp">

<textarea rows="1" flex-text min-height="40" max-height="400"></textarea>
<script src="../bower_components/angular/angular.min.js"></script>
<script src="../angular-flexText.min.js"></script>
<script>
	var app = angular.module('myApp', ['angular-flexText'])
</script>
```

- `min-height` : 最小高度
- `max-height` : 最大高度
