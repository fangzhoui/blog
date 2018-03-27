<template>
  <div class="login-wrap">
      <div class="login-class">
        <el-form :model="loginForm" status-icon ref="loginForm" :rules="loginRule" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName" placeholder="账号" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="userPwd">
            <el-input type="password" v-model="loginForm.userPwd" placeholder="密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item style="opacity: 0.8;">
            <el-button type="primary" @click="submitForm('loginForm')" plain>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            callback();
        }
    };
    var validateUserID = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入账号'));
        } else {
            callback();
        }
    };
    return {
        loginForm: {
            userName: '',
            userPwd: ''
        },
        loginRule: {
            userPwd: [
                { validator: validatePass, trigger: 'blur' }
            ],
            userName: [
                { validator: validateUserID, trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
    submitForm(name){
        this.$refs[name].validate((valid) => {
            if (valid) {
                axios.post('/users/login', this.loginForm).then(res => {
                    if(res.data.status === "0"){
                        this.$store.commit('LOGIN_IN');
                        this.$router.push({path: '/editor'});
                    }else{
                        this.$message.error('账号密码错误');
                    }
                })
            } else {
                return false;
            }
        });
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    background-image: url('../assets/images/login_bg.jpg');
    background-size: cover;
    .login-class{
        box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
        opacity: 1;
        top: 20px;
        -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, 0.85);
        -webkit-transition-property: -webkit-transform,opacity,box-shadow,top,left;
        transition-property: transform,opacity,box-shadow,top,left;
        -webkit-transition-duration: .5s;
        transition-duration: .5s;
        -webkit-transform-origin: 161px 100%;
        -ms-transform-origin: 161px 100%;
        transform-origin: 161px 100%;
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        position: relative;
        width: 400px;
        /* border-top: 2px solid #D8312A; */
        height: 250px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        padding: 45px 40px 40px 40px;
        border-radius: 10px;
        background: #35394a;
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, rgb(0, 0, 0)));
        background: -webkit-linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 )
    }
}
</style>
