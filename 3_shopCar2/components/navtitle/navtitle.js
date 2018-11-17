// components/navtitle/navtitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleChoose:{
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
    choseFn:function(ev){
      console.log(ev)
      // this.triggerEvent("click")
    }
  }
})
