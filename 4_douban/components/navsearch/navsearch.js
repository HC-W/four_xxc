// components/navsearch/navsearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle:{
      type:String
    },
    navSearch: {
      type: String
    },
    search: {
      type: String
    },
    two: {
      type: String
    },
    three: {
      type: String
    },
    icn: {
      type: String
    },
    isjump:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到搜索界面
    jumpFn:function(e){
      this.triggerEvent("jump");
    },
    // 取消按钮点击事件传递
    quxiao:function(){
      this.triggerEvent("quxiao");
    }
  }
})
