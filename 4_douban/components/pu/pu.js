// components/pu/pu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arrtitle:{
      type:String
    },
    arrmore: {
      type: String
    },
    imgsrc:{
      type:JSON
    },
    arrid:{
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
    more:function(e){
      this.triggerEvent("more",this.data);
    }
  }
})
