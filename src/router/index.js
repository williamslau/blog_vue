import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import login from '@/components/login'
import home from '@/components/home'
import blog from '@/components/blog'
import works from '@/components/works'
import note from '@/components/note'
import setup from '@/components/setup'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect:'/Frame',
		},{
			path: '/Frame',
			name: 'Frame',
			component: Frame,
			children:[
				{
					path: '/Frame',
					redirect:'/home',
				},{
					path: '/home',
					name: '首页',
					component: home,
					children:[
						{
							path: '/home/content',
							name: '内容',
							component: content,
						}
					]
				},{
					path: '/blog',
					name: '博客',
					component: blog
				},{
					path: '/works',
					name: '作品',
					component: works
				},{
					path: '/note',
					name: '随笔',
					component: note
				},{
					path: '/setup',
					name: '设置',
					component: setup
				}
			]
		},{
			path: '/login',
			name: '登陆',
			component: login,
		}
	]
})
