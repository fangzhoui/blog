<template>
  	<div class="nav-header-wrap">
		<div class="container">
			<router-link class="nav-logo" to="/">
				<img src="./../assets/images/logo.png">
			</router-link>
			<a link="javascript:;" @click.stop="toggleTextPathToWhere">
				<span class="nav-login-font">{{toggleText}}</span>
			</a>
		</div>
  	</div>
</template>

<script>
export default {
  name: 'nav-header',
  computed: {
  	toggleText(){
  		if(!!this.$store.state.login.loginState){
  			return '[ 切 换 ]'
  		}else{
  			return '登 录'
  		}
  	}
  },
  watch: {
    '$route'(f, n){
        if(f.name === 'login'){
        	this.$store.commit('TOGGLE_HIDE_HEADER')
        }else{
        	this.$store.commit('TOGGLE_SHOW_HEADER')
        }
    }
  },
  methods:{
  	toggleTextPathToWhere(){
  		let path = "/login";
  		if(this.toggleText !== '登 录'){
  			if(this.$route.name == 'editor'){
  				path = "/"
  			}else{
  				path = "/editor"
  			}
  		}
  		return this.$router.push({path: path})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-header-wrap{
	height: 50px;
	line-height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333;
	box-sizing: border-box;
	box-shadow: 0px 4px 5px #888888;
	color: #fff;
	font-weight: bold;
	z-index: 999;
	.nav-login-font{
		float: right;
	}
	.nav-logo{
		float: left;
		display: inline-block;
		margin-top: 7px;
		width: 124px;
		height: 26px;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
