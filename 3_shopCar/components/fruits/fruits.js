// components/fruits/fruits.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataObj:{
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
    clickFn:function(ev){
      console.log(ev);
      this.triggerEvent("car",{"id":ev.target.dataset.ind})
    }
  }
})
