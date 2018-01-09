<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<style>
/* 默认样式 */
html{height:100%;}
body{height:100%;}
body,div,ul,li,span,img,input,form{ margin:0; padding:0; }
body,p,h1,h2,h3,h4,h5,h6,ul,ol,dl,li,dd{ margin:0; }
h1,h2,h3,h4,h5,h6,b,strong{ font-weight: normal; }
ul,ol,{padding:0; }
i{font-style: normal;}
body{ font-family:"冬青黑体简体中文","微软雅黑","宋体",Arial,sans-serif; height:100%; }
a{ text-decoration:none; color:#000;}
li{ list-style:none; }
img{ border:none 0; }
input{ outline:none; border:none; background:none; }
input,textarea,select{ margin:0; }          
input,textarea{ padding:0; }
input::-ms-clear{display:none; }

/*canvas样式*/
#sakura{ width:100%; height:100%; position:fixed; top:0;z-index:-1;}

/* 浮动公共样式 */
.fl{ float:left; _display:inline; }
.fr{ float:right; _display:inline; }
.clearfix:after{ display:block; content:''; clear:both; }
.clear{ zoom:1; }

/*公共样式*/

.list .list_li{
	position:relative;
	padding:25px;
	border:1px solid #fff;
	background:#f1f1f1;
	margin-bottom:15px;
}
.list .list_li i{
	position:absolute;
	top:-1px;
	left:-1px;
	background:#ccc;
	padding:2px;
}
.list .list_li h3{
	font-size:22px;
	margin-bottom:10px;
}
.list .list_li span{
	font-size:14px;
}
.nav .nav_child{
	border:1px solid #ccc;
	margin-bottom:20px;
}
.nav .nav_child .nav_child_box{
	padding:20px;
}
.nav .nav_child h2{
	height:37px;
	line-height:37px;
	border-bottom:1px solid #ccc;
	margin:0 10px;
}
</style>
