<template>
<div class="editor-wrap container">
  <el-form ref="editorFrom" :model="editorFrom" label-width="80px">
  	  <el-row>
  	  	<el-col :span="2" :offset="22">
			<el-button type="primary" plain @click.stop="editorFromSubmit('editorFrom')">保存</el-button>
		</el-col>
  	  </el-row>
	  <el-row :gutter="20">
		<el-col :span="12">
			<el-row>
				<el-form-item label="标题">
					<el-input v-model="editorFrom.articleTitle" placeholder="请输入标题"></el-input>
				</el-form-item>
			</el-row>
      <el-row>
        <el-form-item label="简介">
          <el-input v-model="editorFrom.articleDesc" type="textarea" :rows="5" placeholder="请输入简介"></el-input>
        </el-form-item>
      </el-row>
			<el-row>
				<el-form-item label="是否热点">
					<el-switch 
						v-model="editorFrom.articleIsHot"
						active-color="#12ce66"
						inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
			</el-row>
			<el-row>
			  <el-form-item label="超链接">
					<el-switch 
						v-model="editorFrom.articleIsLink"
						active-color="#12ce66"
						inactive-color="#ff4949">
					</el-switch>
				</el-form-item>
			</el-row>
		</el-col>
		<el-col :span="6" :offset="2">
			<el-form-item label="轮播图">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="editorFrom.articleImage" :src="editorFrom.articleImage" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
		</el-col>
	  </el-row>
	  <el-row>
	  	<el-col :span="12" v-if="editorFrom.articleIsLink">
		  	<el-form-item label="网址">
				<el-input placeholder="请输入网址" v-model="editorFrom.articleLink">
				</el-input>
			</el-form-item>
	  	</el-col>
	  </el-row>
  	</el-form>
  	<div class="quill_wrap" v-if="!editorFrom.articleIsLink">
      <quill-demo :content="editorFrom.articleContent" @onEditorChange="onEditorChange"></quill-demo>
  	</div>
</div>
</template>

<script>
import quillDemo from '@/components/QuillEditor'
import axios from "axios"
export default {
  name: 'editor',
  data(){
  	return {
  		editorFrom: {
  			articleTitle: '别让这些闹心的套路，毁了你的网页设计',
        articleDesc: '网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题。',
  			articleIsHot: false,
  			articleIsLink: true,
  			articleLink: 'http://www.yangqq.com/jstt/css3/2018-03-25/811.html',
  			articleImage: require('./../assets/images/art/6.jpg'),
  			articleContent: ''
  		},
  	}
  },
  methods: {
  	handleAvatarSuccess(res, file) {
    	this.editorFrom.bannerImage = URL.createObjectURL(file.raw);
  	},
  	beforeAvatarUpload(file) {
    	const isJPG = file.type === 'image/jpeg';
    	const isLt2M = file.size / 1024 / 1024 < 2;

    	if (!isJPG) {
     		this.$message.error('上传头像图片只能是 JPG 格式!');
    	}
    	if (!isLt2M) {
      		this.$message.error('上传头像图片大小不能超过 2MB!');
    	}
    	return isJPG && isLt2M;
  	},
    onEditorChange(html){
      this.editorFrom.content = html;
    },
    editorFromSubmit(name){
    	this.$refs[name].validate((valid) => {
          	if (valid) {
            	axios.post('/articles/update', this.editorFrom).then(res => {
                console.log(res)
              })
          	} else {
            	console.log('error submit!!');
            	return false;
          	}
        });
    }
  },
  components: {
    quillDemo,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.editor-wrap{
	margin-top: 60px;
	box-shadow: -3px 3px 10px rgba(6, 17, 47, 0.7);
  opacity: 1;
  border-radius: 10px;
  background: #35394a;
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, rgb(0, 0, 0)));
  background: -webkit-linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
  background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 );
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.avatar-uploader .el-upload {
    border: 1px dashed #0f142a;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #fff;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #fff;
	width: 140px;
	height: 140px;
	line-height: 140px;
	text-align: center;
}
.avatar {
	width: 140px;
	height: 140px;
	display: block;
}

.quill_wrap{
	background-color: #fff;
	height: 400px;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
}
</style>
