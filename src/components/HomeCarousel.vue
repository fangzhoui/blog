<template>
  	 <el-carousel :interval="4000" type="card" :height="carousHeight">
	    <el-carousel-item v-for="(item,index) in hotData" :key="index">
	    	<router-link :to="{path: `/article/${item._id}`}">
		    	<div class="home-carousel-card">
			    	<img :src="item.articleImage" height="100%">
			      	<h3 class="home-carousel-title">{{ item.articleTitle}}</h3>
		    	</div>
	    	</router-link>
	    </el-carousel-item>
	</el-carousel>
</template>

<script>
export default {
  name: 'home-carousel',
  props: {
  	hotData: {
  		type: Array,
  		required: true
  	},
  	carousHeight: {
  		type: String,
  		default: '200px'
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home-carousel-card{
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
}
.home-carousel-title{
	position: absolute;
	bottom: 0;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	color: #fff;
	background-color: #000;
	width: 100%;
	opacity: 0.6;
	text-align: center;
}
</style>
