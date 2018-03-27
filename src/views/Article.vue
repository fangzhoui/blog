<template>
  <div class="article-wrap container">
		<div class="article-container-main">
			<div class="infos">
				<div class="news-view">
					<h2 class="in-title">您现在的位置是：<a href="javascript:;">首页</a>&nbsp;&gt;&nbsp;<a href="javascript:;">心得笔记</a></h2>
					<h3 class="news-title">{{news.title}}</h3>
					<div class="news-about"><strong>简介</strong>{{news.desc}}</div>
					<div class="news-infos" v-html="news.content"></div>
				</div>
			</div>
			<div class="next-info">
		      	<p>上一篇：<a href="javascript:;" @click.stop="linkPrevNext(nextPrevInfo.prev)">{{nextPrevInfo.prev.title}}</a></p>
		      	<p>下一篇：<a href="javascript:;" @click.stop="linkPrevNext(nextPrevInfo.next)">{{nextPrevInfo.next.title}}</a></p>
		    </div>
		</div>
		<div class="article-container-side">
			<about-me></about-me>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
    	news:{
    		title: '【匆匆那些年】总结个人博客经历的这四年…',
    		desc: '博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过…但最后还是坚持了下来，时间如此匆匆，等再回过头已来不及去弥补',
    		content: '<p>博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过…但最后还是坚持了下来，时间如此匆匆，等再回过头已来不及去弥补…</p><p>其实蛮遗憾的，话说这四年，并不是很专注于它，起初的建立是因为“面子”，一个网页设计师怎能没有一个属于自己的博客网站，域名几番斟酌选了yangqq(唯一用心的选了域名)，选好后，草草的用了两天时间，设计了一个简单的博客模板，接下来用了漏洞百出的asp程序(自己瞎改)，从网上copy了很多文章，放到网站上，就这样，我满心欢喜…博客从此也就搁置了。就像玩拼图，趁着三分热度和新奇，一鼓作气完成了，就随意的丢在犄角旮旯了，再也没有兴趣…</p><p>直到我要利用它，博客搭建半年的时间，更新一两次，但是文章都乱七八糟，不是原创，偶尔会写写心情。从内容上来说，还是可以了。就这样，我骄傲的自以为是，拿着这样一个博客网站还有曾经做过的企业政府网站案例去朋友推荐的大公司应聘，最后我被无情的拒绝了，好在他们的技术人员也认真看了我的博客，告知我应该多注重div，css…其实我也有点儿不服气，甚至有点儿恼羞成怒，对他们说，“我诚心加入，既然你们不需要，那这就是你们的损失！”</p><p>那一次应聘，给了我狠狠的一击，也就这样，我删掉了曾经被我copy过来的文章，重新开始…不再那么自以为是，认认真真的研究，做好每一次的案例。两年的时间，博客也有些起色和人气…</p><p>虽说我这博客起初搭建一分钱没花，但这么长时间了，渐渐有了想再利用它赚钱的想法，放了一些联盟广告，因为访问量不高，收入非常可怜，甚至是没有点击量！干脆就撤了广告，再后来，注重优化，目的还是拉广告，效果也很好，收到了好多email，5块钱一个广告文字链接，一个月的广告收入不到60块钱，自诩有人看得上也不错了，可是再怎么审核的链接，跟博客类型不一样，同样属于垃圾链接，就这样的恶性循环，我的网站被百度降权，整整一个月都没有排名...</p><p>找到这个问题，广告链接到期后就没有再续，又一次重新开始。不仅仅是换模板，程序也换。总结了很多程序，最终选择了当初我认为最难拿捏的帝国cms。asp虽然熟悉好控制，但是漏洞太多，经常被挂彩！wordpress也用过，但是加载的插件确实太多，响应时间慢，关键是百度只收录首页！！之所以说用帝国也是被逼的，是因为起初我也就是怕难，总是找各种各样的理由，不去研究，后来老老实实花了几天时间认真看教程后，才觉得其实并不难，难得就是不突破自己那一关去学习，去接受！</p><p>现在也又很多新手不知道怎么使用模板，也不知道用什么程序。每一次问到我用什么程序的时候，其实蛮纠结的，我想推荐你们使用帝国吧，但是10个人里面有9个人都说难，而且以为装了帝国，套上模板组就可以使用了，于是问题就一个接一个来了，其实只要认真看教程，没有那么多问题....“认真看教程！”同样的话，我也不知道说了多少遍了，听进去的人也是少数，又想用，又怕难，又不学，唉，着实着急啊....通常你如果还这样的话，我劝你放弃使用帝国吧！</p><p>话题又扯远了，博客使用帝国cms后，因为全静态页面，百度收录很快，首页“个人博客”关键词排名也上来了，第一页有时候能搜索出来，就这样，二三页的徘徊，我就开始琢磨怎么样排到前三名。仔细研究排前三位的博客代码，还有关键字词。他们的首页结构都没有我做得好，甚至还用最原始的table布局。但是它的首页关键词优化的不错，于是仿着他们的title和关键词，做了首页的修改。仍然没有起色，反而降了，又怎么办呢？得找吸引人的地方，个人博客如果不是想自己个人欣赏，那最好学会分享，哪有人会天天来关注你这些琐碎的生活片段…</p><p>于是我的博客多了个栏目，把自己擅长做得，喜欢的模板分享出来。没想到效果很明显，就连2000人的QQ群都不够用了…就这样坚持到现在，偶尔更新文章和分享模板，博客的权重，访问量都在一点一点增长，有人说我的博客不怎么更新，为什么权重还那么高？我说“文章贵在精，而不在多”。曾经我天天更新文章，但都是伪原创，自认为付出了那么多，肯定得有回报，其实不然。每天一篇伪原创还不及我一个月一篇原创文章效果好，因“站”而异吧。如果你每天都有自己的原创文章，那值得提倡，像我这种绞尽脑汁都出不了一个主题的，还是规矩的定时更新就行啦…</p><p>上个月还说博客突破600的平均访问量，这个月，又意外的发现，权重升到4，平均访问量达到了700多，最高能达到1000多…四年的时间了，博客一点一点的进步，虽说在职业优化师来看，我这不算什么，他们可能几个月时间就能做到，但是对我这一个seo外行人来看，这个慢慢成长进步的过程，是非常值得与享受的…</p>'
    	},
    	nextPrevInfo:{
    		next: {
    			title: '【郑重申明】本站只提供静态模板下载！',
    			id: 5,
    			link: ''
    		},
    		prev: {
    			title: '分享我的个人博客访问量如何做到IP从10到600的(图文)',
    			id: 3,
    			link: ''
    		}
    	}
    }
  },
  methods:{
	linkPrevNext(item){
		if(!!item.link){
			widows.location.href = item.link
		}else{
			this.$router.push({path: `/article/${item.id}`})
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.article-wrap{
	margin-top: 60px;
	overflow: hidden;
	.article-container-main{
		width: 70%;
		float: left;
		/*background: #fff;*/
	    overflow: hidden;
	    border-radius: 10px;
	    text-align: left;
	    .infos{
	    	width: 100%;
		    background: #FFF;
		    border-radius: 10px;
		    overflow: hidden;
		    .news-view{
		    	padding: 20px;
		    	.in-title{
		    		line-height: 40px;
				    height: 40px;
				    font-size: 14px;
				    border-bottom: #000 2px solid;
		    	}
		    	.news-title{
		    		font-size: 24px;
				    font-weight: normal;
				    padding: 20px 0;
				    color: #333;
		    	}
		    	.news-about{
					color: #888888;
				    border: 1px solid #F3F3F3;
				    padding: 10px;
				    margin: 20px auto 15px auto;
				    line-height: 23px;
				    background: none repeat 0 0 #F6F6F6;
				    strong{
				    	color: #38485A;
					    font-weight: 400 !important;
					    font-size: 13px;
					    padding-right: 8px;
				    }
		    	}
		    	.news-infos{
		    		line-height: 24px;
		    	}
		    }
	    }
	    .next-info{
	    	line-height: 24px;
		    width: 100%;
		    background: #FFF;
		    border-radius: 10px;
		    overflow: hidden;
		    margin: 20px 0;
		    p{
		    	padding: 4px 10px;
				border-radius: 5px;
		    }
	    }
	}
	.article-container-side{
		width: 28%;
		float: right;
		margin-left: 10px;
		background: #fff;
	    overflow: hidden;
	    border-radius: 10px;
	}
}
</style>
