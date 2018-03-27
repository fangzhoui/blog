<template>
  <div class="article-list-wrap container">
		<div class="article-list-main">
			<home-title title="热点文章">
				<span class="title-get-it">不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。</span>
			</home-title>
			<ul>
				<li v-for="item in articleList" :key="item._id" @click="linkTo(item)">
					<h3 class="blog-title"><a href="javascript:;" target="_blank">{{item.articleTitle}}</a></h3>
					<div class="blog-info">
			            <p>{{item.articleDesc}}</p>
			        </div>
			        <div class="autor">
			        	<span class="f-r">
			        		<a href="javascript:;" class="more">
			        			阅读原文&gt;&gt;
			        		</a>
			        	</span>
			        </div>
				</li>
			</ul>
			<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20" class="loading-postion">
			  <img src="./../assets/images/loading-spinning-bubbles.svg" v-show="loading">
			</div>
			<!-- <div class="page-list">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="total">
				</el-pagination>
			</div> -->
		</div>
		<div class="article-list-side">
			<about-me></about-me>
		</div>
  </div>
</template>

<script>
import HomeTitle from '@/components/PartTitle'
import axios from "axios"
export default {
  name: 'article-list',
  data () {
    return {
    	articleList: [],
    	// total: 100,
    	page: 1,
    	pageSize: 8,
    	busy: true,
    	loading: false
    }
  },
  methods: {
  	linkTo(item){
  		if(item.articleIsLink){
  			window.open(item.articleLink);  
  		}else{
	  		this.$router.push({path: `/article/${id}`})
  		}
  	},
  	getArticleList(obj, flag){
  		this.loading = true;
  		axios.get('/articles/list', {params: obj}).then(res => {
  			this.loading = false;
  			if(res.data.status == '0'){
  				if(flag){
  					this.articleList = this.articleList.concat(res.data.result.list);

	                if(res.data.result.count == 0){
	                    this.busy = true;
	                }else{
	                    this.busy = false;
	                }
  				}else{
	  				this.articleList = res.data.result.list;
	  				this.busy = false;
  				}
  			}
  		})
  	},
  	loadMore() {
      	this.busy = true;
	    setTimeout(() => {
	      this.page++;
	      let obj = {
	      	page: this.page,
	      	pageSize: this.pageSize
	      }
	      this.getArticleList(obj, true);
	    }, 500);
    }
  },
  created(){
  	this.getArticleList({page: this.page, pageSize: this.pageSize})
  },
  components:{
  	HomeTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.article-list-wrap{
	margin-top: 60px;
	overflow: hidden;
	.article-list-main{
		width: 70%;
		float: left;
		background: #fff;
	    overflow: hidden;
	    border-radius: 10px;
	    text-align: left;
	    .title-get-it{
	    	font-size: 14px;
	    }
	    ul{
	    	padding: 10px;
    		overflow: hidden;
    		width: 100%;
			li{
				border-bottom: #ccc 1px solid;
			    margin-bottom: 10px;
			    overflow: hidden;
			    .blog-title{
			    	line-height: 30px;
				    height: 30px;
				    margin: 10px 0;
				    font-weight: bold;
			    }
			    .blog-info{
			    	p{
			    		color: #888;
    					line-height: 24px;
			    	}
			    }
			    .autor{
			    	width: 100%;
				    overflow: hidden;
				    clear: both;
				    margin: 5px 0 0 0;
				    display: inline-block;
				    color: #838383;
				    font-size: 12px;
				    .f-r{
				    	float: right;
				    }
				    a{
				    	color: #096;
				    }
			    }
			}
	    }
	    .page-list{
	    	text-align: center;
		    color: #666;
		    width: 100%;
		    clear: both;
		    margin: 20px 0;
		    padding-top: 20px;
	    }
	}
	.article-list-side{
		width: 28%;
		float: right;
		margin-left: 10px;
		background: #fff;
	    overflow: hidden;
	    border-radius: 10px;
	}
}
.loading-postion{
	text-align: center;
}
</style>
