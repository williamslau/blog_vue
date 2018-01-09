<template>
	<div>
		<Tabs value="1" type="card" v-show="parentShow">
			<TabPane label="home" name="1">
				<ul class="list">
					<li class="list_li" v-for="(item,index) in aaa" :key="index">
						<i>标签</i>
						<h3><router-link to="/home/content">{{item.title}}</router-link></h3>
						<p class="clearfix">
							<span class="fl">{{item.time}}</span>
							<span class="fl">阅读量{{item.read}}</span>
							<span class="fl">评论{{item.comment}}</span>
						</p>
						<p>标签</p>
					</li>
				</ul>
			</TabPane>
		</Tabs>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				aaa:[],
			}
		},
		watch:{
            $route(to,from){
                if(to.path == '/home'){
                    this.$store.dispatch('parentShowFn');
                };
            }
        },
        computed: {
            parentShow (){
                return this.$store.state.parentShow;
            }
        },
        created(){
            this.$store.dispatch('parentShowFn');
            this.getData();
        },
		methods:{
			getData(){
				var _this=this;
				this.$http.get('/williamlau/home').then(function(res){
					console.log(res);
					_this.aaa=res;
				});
			}
		}
	}
</script>
<style type="text/css" scoped></style>