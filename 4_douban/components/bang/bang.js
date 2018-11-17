// components/bang/bang.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bangobj:{
      type:JSON
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
    juti:function(e){
      // console.log(ind)
      this.triggerEvent("juti",e)
    }
  }
})
