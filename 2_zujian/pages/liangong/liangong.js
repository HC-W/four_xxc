// pages/liangong/liangong.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myClass:{
      type:String,
      value:"aaa"
    },
    isSel:{
      type:Boolean,
      value:false
    },
    personOne:{
      type:String,
      value:""
    },
    personTwo: {
      type: String,
      value: ""
    },
    wugong: {
      type: String,
      value: ""
    },
    ind:{
      type:Number
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
    clickFn:function(){
      var sendMsg={
        "msg":"传过去",
        "data":this.data
      }
      this.triggerEvent("qwer",sendMsg);
    }
  }
})
