<template>
	<div>
		<header>
			<nav class="clearfix">
				<h1 class="fl">williamlau</h1>
				<div class="clearfix fr">
					<div class="fl search">
						<input type="text" name="">
						<button>站没搜索</button>
					</div>
					<ul class="fr clearfix">
						<li class="fl"><router-link to="/home"><Icon type="ios-home-outline"></Icon>首页</router-link></li>
						<li class="fl"><router-link to="/blog"><Icon type="ios-book-outline"></Icon>博客</router-link></li>
						<li class="fl"><router-link to="/works"><Icon type="ios-flask-outline"></Icon>作品</router-link></li>
						<li class="fl"><router-link to="/note"><Icon type="ios-compose-outline"></Icon>随笔</router-link></li>
						<li class="fl"><router-link to="/setup"><Icon type="ios-paw-outline"></Icon>网站设置</router-link></li>
					</ul>
				</div>
			</nav>
		</header>
		<section class="clearfix">
			<div class="fl box">
				<router-view></router-view>
			</div>
			<div class="fr nav">
				<div class="nav_child label">
					<h2><Icon type="ios-pricetags-outline"></Icon>标签</h2>
					<div class="nav_child_box">
						<Tag>标签一</Tag>
						<Tag>标签二</Tag>
						<Tag>标签二</Tag>
						<Tag>标签二</Tag>
						<Tag>标签二</Tag>
					</div>
				</div>
				<div class="nav_child lately">
					<h2><Icon type="ios-timer-outline"></Icon>最近文章</h2>
					<ul class="nav_child_box">
						<li><a href="javascript:;">1.啊大苏打啊实打实</a></li>
						<li><a href="javascript:;">2.啊大苏打啊实打实</a></li>
						<li><a href="javascript:;">3.啊大苏打啊实打实</a></li>
						<li><a href="javascript:;">4.啊大苏打啊实打实</a></li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	header{
		height:50px;
		background:rgba(0,0,0,0.7);
		/*background:#e1e1e1;*/
	}
	section{
		background:rgba(255,255,255,0.3);
	}

	header h1{
		line-height:50px;
	}

	header nav ul li{
		width:100px;
		height:50px;
		line-height:50px;
		font-size:14px;
		text-align:center;
	}
	header nav .search{
		margin:10px;
		height:30px;
		border:1px solid #333;
		overflow:hidden;
	}
	header nav .search input{
		height:28px;
	}
	header nav .search button{
		height:28px;
		background:#fff;
		padding:0 5px;
		border:none;
		outline:none;
	}
	header nav,section{
		width:1200px;
		margin:0 auto;
	}
	section .box{
		width:860px;
		margin:20px;
	}
	section .nav{
		width:260px;
		margin:20px;
	}
</style>