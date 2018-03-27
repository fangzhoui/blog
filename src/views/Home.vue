<template>
	<div class="home-wrap container">
		<div class="home-carousel-wrap">
			<home-carousel :hotData="hotData" :carousHeight="carousHeight"></home-carousel>
		</div>
		<div class="home-container">
			<div class="home-container-main">
				<home-title title="热点文章">
					<router-link class="home-main-more" to="/list">更多&gt&gt</router-link>
				</home-title>
				<ul class="home-container-list">
					<li class="home-container-item" v-for="item in topList" :key="item._id" @click="linkTo(item)">
						<div class="tpic">
							<img :src="item.articleImage">
						</div>
						<b>{{item.articleTitle}}</b>
						<span>{{item.articleDesc}}</span>
					</li>
				</ul>
			</div>
			<div class="home-container-side">
				<about-me></about-me>
			</div>
		</div>
	</div>
</template>

<script>

import HomeCarousel from '@/components/HomeCarousel'
import HomeTitle from '@/components/PartTitle'
import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
      hotData: [],
      topList: [],
      carousHeight: '220px',
    }
  },
  methods:{
  	linkTo(item){
  		if(item.articleIsLink){
  			window.open(item.articleLink);  
  		}else{
	  		this.$router.push({path: `/article/${id}`})
  		}
  	},
  	getArticlesHotList(obj){
  		axios.get('/articles/list', {params: obj}).then(res => {
  			this.loading = false;
  			if(res.data.status == '0'){
  				if(obj.isHot){
	  				this.hotData = res.data.result.list;
  				}else{
  					this.topList = res.data.result.list.slice(0, 6);
  				}
  			}
  		})
  	}
  },
  created(){
  	this.getArticlesHotList({page: 1, pageSize: 6, isHot: true});
  	this.getArticlesHotList({page: 1, pageSize: 6, isHot: false});
  },
  components:{
  	HomeCarousel,
  	HomeTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home-wrap{
	margin: auto;
	width: 100%;
	overflow: hidden;
}
.home-carousel-wrap{
	margin-top: 60px;
}
.home-container{
	clear: both;
	margin: 10px auto;
	width: 100%;
	overflow: hidden;
	.home-container-main{
		width: 70%;
		float: left;
		background: #fff;
	    overflow: hidden;
	    border-radius: 10px;
	    text-align: left;
	    .home-main-more{
	    	display: block;
		    float: right;
		    position: relative;
		    overflow: hidden;
		    margin-right: 20px;
		    text-decoration: none;
		    color: #555;
		    font-size: 14px;
		    &:after{
		    	content: '';
			    display: block;
			    width: 1px;
			    height: 22px;
			    border-radius: 10px;
			    background: #000;
			    -webkit-transform: rotate(45deg);
			    transform: rotate(45deg);
			    position: absolute;
			    bottom: -8px;
		    }
	    }
	    .home-container-list{
	    	overflow: hidden;
   	 		padding: 0 10px 10px;
   	 		list-style: none;
   	 		.home-container-item{
   	 			float: left;
			    width: 33%;
			    border-bottom: #ccc 1px solid;
			    border-left: #ccc 1px solid;
			    overflow: hidden;
			    padding: 20px;
			    list-style: none;
			    display: list-item;
    			text-align: -webkit-match-parent;
    			.tpic{
    				width: 100%;
				    height: 100px;
				    overflow: hidden;
				    border-radius: 10px;
				    background: #CCC;
				    img{
				    	margin: auto;
					    width: 100%;
					    transition: all .5s ease;
					    border: 0;
    					display: block;
				    }
    			}
			    b{
			    	display: block;
				    width: 100%;
				    overflow: hidden;
				    height: 50px;
				    line-height: 50px;
				    margin: 10px 0;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    overflow: hidden;
				    font-weight: bold;
			    }
			    span{
			    	color: #999;
				    height: 76px;
				    display: block;
				    overflow: hidden
			    }
			    &:hover{
			    	box-shadow: 0px 4px 8px #333;
			    	.tpic{
			    		img{
			    			transform: scale(1.2); 
			    		}
			    	}
			    }
   	 		}
   	 		.home-container-item:nth-child(1){
   	 			border-left: 0;
   	 		}
   	 		.home-container-item:nth-child(4) {
			    border-left: 0;
			    border-bottom: 0;
			}
			.home-container-item:nth-child(5) {
			    border-bottom: 0;
			}
			.home-container-item:nth-child(6) {
			    border-bottom: 0;
			}
	    }
	}
	.home-container-side{
		width: 28%;
		float: right;
		margin-left: 10px;
		background: #fff;
	    overflow: hidden;
	    border-radius: 10px;
	}
}
</style>
