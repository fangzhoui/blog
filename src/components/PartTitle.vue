<template>
<div class="part-title-wrap">
	<p>{{title}}</p>
  <p class="right"><slot></slot></p>
  
</div>
</template>

<script>
export default {
  name: 'part-title',
  props: {
  	title: {
  		type: String,
  		default: '默认标题'
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.part-title-wrap{
	padding: 0 10px;
  line-height: 40px;
  height: 40px;
  font-size: 18px;
  border-bottom: #000 2px solid;
  .right{
    float: right;
  }
  p{
    display: inline-block;
  }
}
</style>
