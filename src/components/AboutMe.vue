<template>
  <div class="about-me-wrap">
    <h2 class="ab_title">关于我</h2>
    <div class="avatar"><img src="./../assets/images/avatar.jpg"></div>
    <div class="ab_con">
      <p>网名：jack.f | 方舟</p>
      <p>职业：Web前端设计师、网页设计 </p>
      <p>微信：18167007297</p>
      <p>邮箱：601064569@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-me',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.about-me-wrap{
  background: #FFF;
  border-radius: 10px;
  overflow: hidden;
  .ab_title{
    text-align: center;
    position: relative;
    margin: 20px;
    &:before{
      content: "";
      width: 25%;
      height: 2px;
      background: #000;
      position: absolute;
      left: 0;
      bottom: 8px;
    }
    &:after{
      content: "";
      width: 25%;
      height: 2px;
      background: #000;
      position: absolute;
      right: 0;
      bottom: 8px;
    }
  }
  .avatar{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50px;
    margin: auto;
    img{
      width: 100px;
      height: 100px;
    }
  }
  .ab_con{
    line-height: 30px;
    padding: 10px;
    p{
      background: #f6f6f6;
      margin: 5px 0;
      padding-left: 10px;
      border-radius: 5px;
      text-shadow: rgba(255, 255, 255, 0.8)
    }
  }
}
</style>
