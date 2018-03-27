import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Article from '@/views/Article'
import Editor from '@/views/Editor'
import ArticleList from '@/views/ArticleList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/',
    	name: 'home',
    	component: Home
    },
    {
    	path: '/Article/:Id',
    	name: 'Article',
    	component: Article
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/list',
      name: 'article-list',
      component: ArticleList
    },
  ]
})
