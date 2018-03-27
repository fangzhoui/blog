<template>
<div class="editor-demo-wrap">
	<quill-editor 
    :content="quillContent"
    @change="onEditorChange($event)"
    ref="myQuillEditor"
    :options="editorOption">
  </quill-editor>
</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './../assets/css/quillStyle.css'

import { Quill, quillEditor } from 'vue-quill-editor'
// import { ImageDrop } from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'

// Quill.register('modules/imageDrop', ImageDrop)
// Quill.register('modules/imageResize', ImageResize)
var Size = Quill.import('attributors/style/size')
var Align = Quill.import('attributors/style/align')
Size.whitelist = ['10px', '14px', '18px', '32px'];
Quill.register(Size, true)
Quill.register(Align, true)
export default {
  name: 'editor-demo',
  data(){
    return{
      editorOption: {
        theme: 'snow',
        placeholder: "请输入内容",
        modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{'size': ['10px', '14px', '18px', '32px']}],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ],
        history: {
          delay: 1000,
          maxStack: 50,
          userOnly: false
        },
        // imageDrop: true,
        // imageResize: {
        //     displayStyles: {
        //         backgroundColor: 'black',
        //         border: 'none',
        //         color: 'white'
        //     },
        //     modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
        // }
        },
      },
    }
  },
  props:{
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
    quillContent(){
      return this.content
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      // this.quillContent = html
      this.$emit('onEditorChange', html)
    }
  },
  components: {
    'quill-editor': quillEditor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.quill-editor {
  height: 350px;
}
</style>
