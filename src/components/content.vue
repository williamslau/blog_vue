<template>
	<div v-show="parent2Show">
		contentasdasdasasdasd
	</div>
</template>
<script type="text/javascript">
    import {mapState} from 'vuex'
	export default{
		data(){
			return{}
		},
		watch:{
            $route(to,from){
                if(to.path == '/home/content'){
                    this.$store.dispatch('parent2ShowFn');
                };
            }
        },
        computed: {
            parent2Show () {
                return this.$store.state.parent2Show;
            }
        },
        created(){
            this.$store.dispatch('parent2ShowFn');
        },
		methods:{

		}
	}
</script>
<style type="text/css" scoped></style>